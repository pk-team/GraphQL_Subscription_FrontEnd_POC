import type { ListTimeEntriesQuery, ListTimeEntriesQueryVariables, TimeEntry } from "$lib/graphql/generated/graphql";
import client from "$lib/operations/graphqlClient";

import { gql } from "@urql/svelte";


const LIST_TIME_ENNTRIES_QUERY = gql`
query listTimeEntries {
    timeEntries {
        description
        hours
    }
}
`

export const listTimeEntriesQuery = async () => {
    const reuslt = await client.query<ListTimeEntriesQuery, ListTimeEntriesQueryVariables>(
        LIST_TIME_ENNTRIES_QUERY,
        {}).toPromise();
    const r = reuslt.data?.timeEntries ?? [];
    return r as TimeEntry[];
}