<script context="module" lang="ts">
	import { browser } from '$app/env';
	import { AuthClient } from '$lib/gen/auth.client';
	import { TwirpFetchTransport } from '@protobuf-ts/twirp-transport';
	import { SESSIONKEY_KEY } from '$lib/const';

	export async function load({ session }) {
		let sessionKey = '';
		if (browser) {
			sessionKey = localStorage.getItem(SESSIONKEY_KEY);
		} else {
			sessionKey = session.sessionKey;
		}

		if (sessionKey) {
			const transport = new TwirpFetchTransport({
				baseUrl: 'http://localhost:8080/rpc'
			});
			const client = new AuthClient(transport);
			const response = await client.authorize({ sessionKey });
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
