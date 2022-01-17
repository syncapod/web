<script context="module" lang="ts">
	import { browser } from '$app/env';
	import { SESSIONKEY_KEY } from '$lib/const';
	import { authClient } from '$lib/twirp';

	export async function load({ session }) {
		let sessionKey = '';
		if (browser) {
			sessionKey = localStorage.getItem(SESSIONKEY_KEY);
		} else {
			sessionKey = session.sessionKey;
		}

		if (sessionKey) {
			const response = await authClient.authorize({ sessionKey });
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
	import type { User } from '$lib/gen/user';

	export let user: User;
</script>

<h2>Hello {user.username}</h2>
