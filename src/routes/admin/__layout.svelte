<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import Sidebar from '$lib/admin/sidebar.svelte';

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
</script>

<svelte:head><title>{getPageTitle($page.url.pathname)}</title></svelte:head>

<div class="flex">
	<Sidebar on:navigate={(event) => onNavigate(event.detail)} />

	<main class="w-full p-6">
		<slot />
	</main>
</div>
