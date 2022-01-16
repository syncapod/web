import { SESSIONKEY_KEY } from '$lib/const';
import { parse } from 'cookie';
import type { GetSession } from '@sveltejs/kit';

const adminHook: GetSession = (request) => {
	const cookies = request.headers.cookie ? parse(request.headers.cookie) : {};
	return { sessionKey: request.headers.cookie ? cookies[SESSIONKEY_KEY] : '' };
}

export const getSession: GetSession = (request) => {
	if (request.url.pathname.startsWith('/admin')) {
		return adminHook(request);
	}
	return {};
}
