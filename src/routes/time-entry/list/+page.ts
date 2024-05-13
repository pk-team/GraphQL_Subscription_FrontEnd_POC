import type { PageLoad } from './$types';
import { listTimeEntriesQuery } from './listTimeEntriesQuery';

export const ssr = false;

export const load = (async () => {
    const timeEntries = await listTimeEntriesQuery();
    return {
        timeEntries
    }
}) satisfies PageLoad;