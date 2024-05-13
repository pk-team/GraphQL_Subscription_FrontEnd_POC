export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTimeEntry: TimeEntry;
};


export type MutationCreateTimeEntryArgs = {
  description: Scalars['String']['input'];
  hours: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  greet: Scalars['String']['output'];
  timeEntries: Array<TimeEntry>;
};

export type Subscription = {
  __typename?: 'Subscription';
  timeEntryCreated: TimeEntry;
};

export type TimeEntry = {
  __typename?: 'TimeEntry';
  date: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hours: Scalars['Int']['output'];
};

export type ListTimeEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTimeEntriesQuery = { __typename?: 'Query', timeEntries: Array<{ __typename?: 'TimeEntry', description?: string | null, hours: number }> };

export type TimeEntryCreatedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TimeEntryCreatedSubscription = { __typename?: 'Subscription', timeEntryCreated: { __typename?: 'TimeEntry', description?: string | null, date: any, hours: number } };
