import { Client, cacheExchange, fetchExchange, subscriptionExchange } from '@urql/svelte';
import { createClient as createWSClient } from 'graphql-ws'; // Or 'subscriptions-transport-ws'
import WebSocketNode from 'ws';
import type { WebSocket } from 'graphql-ws';
import { browser } from '$app/environment';

// Choose WebSocket implementation based on environment
const wsClient = createWSClient({
    url: 'ws://localhost:5265/yo',
    webSocketImpl: browser ? WebSocket : WebSocketNode, // Use native WebSocket in browser, 'ws' in Node.js
});

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

const client = new Client({
    url: 'http://localhost:5265/yo', // Your GraphQL endpoint
    exchanges: [
        cacheExchange, // Enable caching for improved performance
        fetchExchange, // Use fetch for making GraphQL requests    
        configuredsubscriptionExchange 
    ],
    requestPolicy: 'cache-and-network',
});

export default client; 
