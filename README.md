# URQL Svelte & Sveltekit & Subscriptions POC


### Setup subscriptions on a sveltekit client.

In addition to the current URQL client setup.

```typescript
export const skdClient = createClient({
    url,
    exchanges: [cacheExchange, fetchExchange],
    requestPolicy: "cache-and-network"
})
```

Add the the following packges

```sh
pnpm i -D ws
pnpm i -D @types/ws
pnpm i -D graphql-ws
```

```typescript 
import WebSocketNode from 'ws';
import type { WebSocket } from 'graphql-ws';
import { browser } from '$app/environment';

const wsClient = createWSClient({
    url: 'ws://localhost:5100/graphql',
    webSocketImpl: browser ? WebSocket : WebSocketNode, // Use native WebSocket in browser, 'ws' in Node.js
});
```

Configure a subscription exchange

```typescript
const configuredsubscriptionExchange = subscriptionExchange({
    forwardSubscription(request) {
        const input = { ...request, query: request.query || '' };
        return {
            subscribe(sink) {
                const unsubscribe = wsClient.subscribe(input, sink);
                return { unsubscribe };
            },
        };
    },
})

```

Then setup the client

```typescript
const client = new Client({
    url: 'http://localhost:5265/yo', // Your GraphQL endpoint
    exchanges: [
        cacheExchange, // Enable caching for improved performance
        fetchExchange, // Use fetch for making GraphQL requests    
        configuredsubscriptionExchange 
    ],
    requestPolicy: 'cache-and-network',
});
```


