<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';

	const isBold = (pathname: string, endpoint: string): string => {
		return pathname.includes(endpoint) ? 'font-semibold' : '';
	};

	const dispatch = createEventDispatcher();
</script>

<aside class="flex flex-col max-w-max min-h-screen bg-gray-50">
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
	<div class="spacer invisible p-6 text-2xl font-light">hidden spacer</div>
	<!-- end spacer -->
</aside>
