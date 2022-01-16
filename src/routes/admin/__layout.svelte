<script lang="ts">
	import { goto } from '$app/navigation';

	import Sidebar from '$lib/admin/sidebar.svelte';

	const onNavigate = (location: string) => {
		goto('/admin/' + location);
	};
</script>

<div class="flex">
	<Sidebar on:navigate={(event) => onNavigate(event.detail)} />

	<main class="w-full p-6">
		<slot />
	</main>
</div>
