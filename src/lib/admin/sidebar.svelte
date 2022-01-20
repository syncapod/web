<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	import { sessionKeyStore } from '$lib/store';
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/twirp';

	const isBold = (pathname: string, endpoint: string): string => {
		return pathname.includes(endpoint) ? 'font-semibold' : '';
	};

	const logout = async () => {
		await authClient.logout({ sessionKey: $sessionKeyStore });
		$sessionKeyStore = '';
		goto('/admin/login');
	};

	const dispatch = createEventDispatcher();
</script>

<aside class="flex flex-col min-w-max min-h-screen bg-gray-50">
	<div class="title">
		<h1 class="text-2xl p-6 font-light">Syncapod Admin</h1>
	</div>
	<!-- spacer -->
	<div class="spacer flex-grow" />
	<!-- end spacer -->

	<div
		class="{isBold($page.url.pathname, 'users')}
		nav w-full p-6 text-center cursor-pointer hover:bg-white"
		on:click={() => dispatch('navigate', 'users')}
	>
		Users
	</div>
	<div
		class="{isBold($page.url.pathname, 'podcasts')}
		nav w-full p-6 text-center cursor-pointer hover:bg-white"
		on:click={() => dispatch('navigate', 'podcasts')}
	>
		Podcasts
	</div>

	<!-- spacer -->
	<div class="spacer flex-grow" />
	<div
		on:click={logout}
		class="spacer p-6 text-lg text-gray-400 font-light cursor-pointer hover:text-black"
	>
		Logout
	</div>
	<!-- end spacer -->
</aside>
