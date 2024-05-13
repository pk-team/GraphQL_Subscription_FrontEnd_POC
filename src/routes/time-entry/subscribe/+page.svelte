<script lang="ts">
	import type { TimeEntry, TimeEntryCreatedSubscription } from '$lib/graphql/generated/graphql';
	import client from '$lib/operations/graphqlClient';
	import { subscriptionStore } from '@urql/svelte';
	import { TIME_ENTRY_CREATED_SUBSCRIPTION } from './timeEntryCreatedSubscription';

	const subs = subscriptionStore<TimeEntryCreatedSubscription>({
		client: client,
		query: TIME_ENTRY_CREATED_SUBSCRIPTION
	});

    let timeEnties: TimeEntry[] = []

	$: timeEntryCreated = $subs?.data?.timeEntryCreated;
    $: {
        if (timeEntryCreated) {
            debugger
            timeEnties = [ timeEntryCreated, ...timeEnties];
        }
    }
</script>

<h2>Subscribe to create time entry feed</h2>

{#if timeEntryCreated}
	<pre>{JSON.stringify(timeEnties, null, 2)}</pre>
{:else}
    <div>waiting...</div>
{/if}
