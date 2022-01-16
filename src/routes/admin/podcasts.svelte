<script lang="ts">
	// TODO: make some client for best way to use twirp
	import type { AddPodReq, AddPodRes, SearchPodReq, SearchPodRes } from '$lib/gen/admin';

	import { AdminClient } from '$lib/gen/admin.client';
	import { sessionKeyStore } from '$lib/store';
	import { TwirpFetchTransport } from '@protobuf-ts/twirp-transport';
	import Button from '$lib/admin/button.svelte';
	import type { FinishedUnaryCall, RpcError } from '@protobuf-ts/runtime-rpc';
	import type { Podcast } from '$lib/gen/podcast';

	// AddPodcast
	let errorMsg = '';
	let successMsg = '';
	let rssURL = '';
	let searchResults: Podcast[];

	// SearchPodcast
	let searchTerm = '';
	let debounceTimer: NodeJS.Timer;

	const addPodcast = async () => {
		const transport = new TwirpFetchTransport({ baseUrl: 'http://localhost:8080/rpc' });
		const adminClient = new AdminClient(transport);

		let r: FinishedUnaryCall<AddPodReq, AddPodRes>;
		try {
			r = await adminClient.addPodcast({ url: rssURL }, { meta: { Auth_Token: $sessionKeyStore } });
		} catch (e) {
			const rpcError = e as RpcError;
			errorMsg = rpcError.message;
			successMsg = '';
			return;
		}
		// TODO: add more informtation to display
		successMsg = r.response.podcast.title;
		rssURL = errorMsg = '';
	};

	const searchPodcast = () => {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(async () => {
			const transport = new TwirpFetchTransport({ baseUrl: 'http://localhost:8080/rpc' });
			const adminClient = new AdminClient(transport);

			let r: FinishedUnaryCall<SearchPodReq, SearchPodRes>;
			try {
				r = await adminClient.searchPodcasts(
					{ text: searchTerm },
					{ meta: { Auth_Token: $sessionKeyStore } }
				);
			} catch (e) {
				const err = e as RpcError;
				console.log(err);
			}
			searchResults = r.response.podcasts;
		}, 750);
	};
</script>

<svelte:head><title>Syncapod Admin - Podcasts</title></svelte:head>

{#if errorMsg}
	<p class="font-semibold text-red-400">{errorMsg}</p>
{/if}
<input
	bind:value={rssURL}
	class="border-gray-300 border p-1 w-full md:w-3/4 xl:w-1/2 2xl:w-1/3"
	type="text"
	placeholder="Enter podcast RSS URL..."
/>

<Button on:click={addPodcast} text="Add" />
{#if successMsg}
	<p class="text-green-800">Successfully added: {successMsg}</p>
{/if}

<div class="search mt-4">
	<input
		bind:value={searchTerm}
		on:keyup={searchPodcast}
		class="border-gray-300 border p-1 w-full md:w-1/2 xl:w-1/3 2xl:w-1/4"
		type="text"
		placeholder="Enter search term..."
	/>
</div>

{#if searchResults}
	{#each searchResults as podcast}
		<div>{podcast.title}</div>
	{/each}
{/if}
