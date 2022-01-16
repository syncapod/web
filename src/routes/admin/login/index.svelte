<script lang="ts">
	import { AuthClient } from '$lib/gen/auth.client';
	import { sessionKeyStore } from '$lib/store';
	import { goto } from '$app/navigation';

	import { TwirpFetchTransport } from '@protobuf-ts/twirp-transport';

	const transport = new TwirpFetchTransport({
		baseUrl: 'http://localhost:8080/rpc'
	});
	const client = new AuthClient(transport);

	let username = '';
	let password = '';
	let failed = false;

	const login = async (e: Event) => {
		const response = await client.authenticate({
			username: username,
			password: password,
			stayLoggedIn: true,
			userAgent: navigator.userAgent
		});
		if (response.response.sessionKey == '') {
			failed = true;
			return;
		}
		$sessionKeyStore = response.response.sessionKey;
		goto('/admin');
	};

	// reset failed status
	$: if (username || password) failed = false;
</script>

<form on:submit|preventDefault={login} class="p-4 flex flex-col">
	{#if failed}
		<p class="text-red-800">Failed to login!</p>
	{/if}
	<label for="username">Username:</label>
	<input
		class="border border-zinc-400 p-0.5"
		name="username"
		id="username"
		placeholder="Username"
		bind:value={username}
		required
		type="text"
	/>
	<label class="mt-2" for="password">Password:</label>
	<input
		class="border border-zinc-400 p-0.5"
		name="password"
		id="password"
		placeholder="Password"
		bind:value={password}
		required
		type="password"
	/>
	<input type="submit" class="mt-2 bg-zinc-800 text-white p-2" value="Login" />
</form>
