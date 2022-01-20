import { TwirpFetchTransport } from '@protobuf-ts/twirp-transport';
import { AdminClient } from './gen/admin.client';
import { AuthClient } from './gen/auth.client';
import { rpcPath } from './const';

const transport = new TwirpFetchTransport({
	baseUrl: rpcPath
});

console.log('rpcPath: ', rpcPath);

export const authClient = new AuthClient(transport);
export const adminClient = new AdminClient(transport);
