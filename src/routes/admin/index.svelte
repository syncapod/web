<script context="module" lang="ts">
	import type { AuthorizeReq, AuthorizeRes } from '$lib/gen/auth';
	import type { FinishedUnaryCall, RpcError } from '@protobuf-ts/runtime-rpc';
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
			let response: FinishedUnaryCall<AuthorizeReq, AuthorizeRes>;
			try {
				response = await authClient.authorize({ sessionKey: sessionKey, admin: true });
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
	import type { User } from '$lib/gen/user';

	export let user: User;
</script>

<h2>Hello {user.username}</h2>
