import { gql } from "@urql/svelte";


export const TIME_ENTRY_CREATED_SUBSCRIPTION = gql`
subscription timeEntryCreated {
  timeEntryCreated {
    description
    date
    hours
  }
}
`
