import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const SESSIONKEY_KEY = 'SESSION_KEY';

// getInitialStoreValue returns the store value, if not exists (or !browser returns default)
function getInitialStoreValue(key: string, defaultValue: string): string {
	if (browser) return localStorage.getItem(key) || defaultValue;

	return defaultValue;
}

export const sessionKeyStore = writable(getInitialStoreValue(SESSIONKEY_KEY, ''));

// subscribe to updates to update localStorage
sessionKeyStore.subscribe((val) => {
	if (browser) {
		localStorage.setItem(SESSIONKEY_KEY, val);
		document.cookie = `${SESSIONKEY_KEY}=${val}; max-age=31536000; secure; path=/admin`;
	}
});
