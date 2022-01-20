<script context="module" lang="ts">
</script>

<script lang="ts">
	import { adminAuthClient, sessionKeyStore } from '$lib/store';
	import { goto } from '$app/navigation';

	let username = '';
	let password = '';
	let failed = false;
	let invalidSession = false;

	const login = async (e: Event) => {
		invalidSession = false;

		const response = await $adminAuthClient.authenticate({
			username: username,
			password: password,
			userAgent: navigator.userAgent,
			stayLoggedIn: true,
			admin: true
		});
		if (response.response.sessionKey == '') {
			failed = true;
			return;
		}
		$sessionKeyStore = response.response.sessionKey;
		goto('/admin');
	};

	if ($sessionKeyStore) {
		$sessionKeyStore = '';
		invalidSession = true;
	}

	// reset failed status
	$: if (username || password) failed = false;
</script>

<svelte:head><title>Sycapod Admin Login</title></svelte:head>

<div class="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto my-8">
	<h1 class="text-center text-4xl font-thin mb-4">Syncapod Admin Login</h1>

	<form on:submit|preventDefault={login} class="p-4 flex flex-col space-y-4">
		{#if invalidSession}
			<p class="text-red-800">Expired or invalid session. Please login again.</p>
		{/if}
		{#if failed}
			<p class="text-red-800">Failed to login!</p>
		{/if}
		<div class="flex flex-col">
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
		</div>

		<div class="flex flex-col">
			<label class="" for="password">Password:</label>
			<input
				class="border border-zinc-400 p-0.5"
				name="password"
				id="password"
				placeholder="Password"
				bind:value={password}
				required
				type="password"
			/>
		</div>

		<div class="min-w-full">
			<input class="block bg-zinc-800 text-white p-2 w-full mx-auto" type="submit" value="Login" />
		</div>
	</form>
</div>
