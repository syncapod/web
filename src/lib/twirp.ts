import { TwirpFetchTransport } from '@protobuf-ts/twirp-transport';
import { AdminClient } from './gen/admin.client';
import { AuthClient } from './gen/auth.client';

const transport = new TwirpFetchTransport({
	baseUrl: 'http://localhost:8080/rpc'
});

export const authClient = new AuthClient(transport);
export const adminClient = new AdminClient(transport);
