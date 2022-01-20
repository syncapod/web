<script context="module" lang="ts">
	import type { AuthorizeReq, AuthorizeRes } from '$lib/gen/auth';
	import type { FinishedUnaryCall, RpcError } from '@protobuf-ts/runtime-rpc';
	import { browser } from '$app/env';
	import { SESSIONKEY_KEY } from '$lib/const';
	import { adminAuthClient, currentUser } from '$lib/store';

	export async function load({ session }) {
		let sessionKey = '';
		if (browser) {
			sessionKey = localStorage.getItem(SESSIONKEY_KEY);
		} else {
			sessionKey = session.sessionKey;
		}

		if (sessionKey) {
			let response: FinishedUnaryCall<AuthorizeReq, AuthorizeRes>;
			try {
				response = await get(adminAuthClient).authorize({ sessionKey: sessionKey, admin: true });
			} catch (e) {
				const err = e as RpcError;
				console.log(err.code);
				return {
					status: 302,
					redirect: '/admin/login'
				};
			}

			if (response.response) {
				return {
					props: {
						user: response.response.user
					}
				};
			}
		}
		return {
			status: 302,
			redirect: '/admin/login'
		};
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Sidebar from '$lib/admin/sidebar.svelte';
	import { get } from 'svelte/store';
	import type { User } from '$lib/gen/user';

	const onNavigate = (location: string) => {
		goto('/admin/' + location);
	};

	const getPageTitle = (pathname: string): string => {
		let pageTitle = 'Syncapod Admin';
		const pathSplit = pathname.split('/');
		if (pathSplit.length === 3)
			pageTitle += ' - ' + pathSplit[2].charAt(0).toUpperCase() + pathSplit[2].slice(1);
		return pageTitle;
	};

	export let user: User;
	$currentUser = user;
</script>

<svelte:head><title>{getPageTitle($page.url.pathname)}</title></svelte:head>

<div class="flex">
	<Sidebar on:navigate={(event) => onNavigate(event.detail)} />

	<main class="w-full p-6">
		<slot />
	</main>
</div>
