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
    Email: { input: any; output: any; }
    Map: { input: any; output: any; }
    StrMap: { input: any; output: any; }
    Time: { input: any; output: any; }
    UUID: { input: any; output: any; }
};

export type StringFilterInput = {
    EQ?: InputMaybe<Scalars['String']['input']>;
    ILIKE?: InputMaybe<Scalars['String']['input']>;
    IN?: InputMaybe<Array<Scalars['String']['input']>>;
    LIKE?: InputMaybe<Scalars['String']['input']>;
    NEQ?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
    EQ?: InputMaybe<Scalars['Float']['input']>;
    GT?: InputMaybe<Scalars['Float']['input']>;
    GTE?: InputMaybe<Scalars['Float']['input']>;
    LT?: InputMaybe<Scalars['Float']['input']>;
    LTE?: InputMaybe<Scalars['Float']['input']>;
    NEQ?: InputMaybe<Scalars['Float']['input']>;
};

export type User = {
    __typename?: 'User';
    email: Scalars['Email']['output'];
    firstName: Scalars['String']['output'];
}

export type MinMax = {
    __typename?: 'MinMax';
    max?: Maybe<Scalars['Float']['output']>;
    min?: Maybe<Scalars['Float']['output']>;
};

export type ResourceFilters = {
    __typename?: 'ResourceFilters';
    service?: Maybe<Array<Scalars['String']['output']>>;
};

export type ResourceFilterInput = {
    AND?: InputMaybe<Array<ResourceFilterInput>>;
    OR?: InputMaybe<Array<ResourceFilterInput>>;
    service?: InputMaybe<StringFilterInput>;
};

export type OpportunityFilters = {
    __typename?: 'OpportunityFilters';
    service?: Maybe<Array<Scalars['String']['output']>>;
    risk?: Maybe<Array<Scalars['Int']['output']>>;
    assignedUser?: Maybe<Array<User>>;
    savings?: MinMax;
};

export type OpportunitiesFilterInput = {
    AND?: InputMaybe<Array<OpportunitiesFilterInput>>;
    NOT?: InputMaybe<OpportunitiesFilterInput>;
    OR?: InputMaybe<Array<OpportunitiesFilterInput>>;
    resource?: InputMaybe<ResourceFilterInput>;
    risk?: InputMaybe<FloatFilterInput>;
};
