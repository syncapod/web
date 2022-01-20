import { browser } from '$app/env';
import { derived, writable } from 'svelte/store';
import { TwirpFetchTransport } from '@protobuf-ts/twirp-transport';
import { rpcPath, SESSIONKEY_KEY } from './const';
import { AdminClient } from './gen/admin.client';
import { AuthClient } from './gen/auth.client';
import type { User } from './gen/user';

// initLocalStore initializes a custom store to update session in localStorage as well as a cookie
const initAdminSessionStore = (key: string, value: string) => {
	if (browser) {
		value = localStorage.getItem(key) || value;
		localStorage.setItem(key, value)
	}

	const { set, update, subscribe } = writable(value);

	return {
		set: (value: string) => {
			if (browser) {
				localStorage.setItem(key, value)
				document.cookie = `${SESSIONKEY_KEY}=${value}; max-age=31536000; secure; path=/admin`;
			}
			return set(value);
		},
		update: update,
		subscribe: subscribe,
	}
}

export const sessionKeyStore = initAdminSessionStore(SESSIONKEY_KEY, '');

const twirpTransport = derived(sessionKeyStore, (value) => new TwirpFetchTransport({
	baseUrl: rpcPath,
	meta: { 'Auth_Token': value }
}))

export const adminClient = derived(twirpTransport, (value) => new AdminClient(value));
export const adminAuthClient = derived(twirpTransport, (value) => new AuthClient(value));
export const currentUser = writable<User>();
