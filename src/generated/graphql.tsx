import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Brewery = {
  __typename?: "Brewery";
  id: Scalars["ID"];
  name: Scalars["String"];
  location?: Maybe<Scalars["String"]>;
  established?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  brewery?: Maybe<Brewery>;
  recipes?: Maybe<Array<Maybe<RecipeSummary>>>;
  recipe?: Maybe<Recipe>;
};

export type QueryRecipeArgs = {
  id: Scalars["ID"];
};

export type Recipe = {
  __typename?: "Recipe";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type RecipeSummary = {
  __typename?: "RecipeSummary";
  id: Scalars["ID"];
  name: Scalars["String"];
  style: Scalars["String"];
};
export type GetBreweryQueryVariables = {};

export type GetBreweryQuery = { __typename?: "Query" } & {
  brewery: Maybe<
    { __typename?: "Brewery" } & Pick<
      Brewery,
      "name" | "id" | "location" | "established"
    >
  >;
};

export const GetBreweryDocument = gql`
  query GetBrewery {
    brewery {
      name
      id
      location
      established
    }
  }
`;
export type GetBreweryComponentProps = Omit<
  ReactApollo.QueryProps<GetBreweryQuery, GetBreweryQueryVariables>,
  "query"
>;

export const GetBreweryComponent = (props: GetBreweryComponentProps) => (
  <ReactApollo.Query<GetBreweryQuery, GetBreweryQueryVariables>
    query={GetBreweryDocument}
    {...props}
  />
);

export type GetBreweryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetBreweryQuery, GetBreweryQueryVariables>
> &
  TChildProps;
export function withGetBrewery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetBreweryQuery,
    GetBreweryQueryVariables,
    GetBreweryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetBreweryQuery,
    GetBreweryQueryVariables,
    GetBreweryProps<TChildProps>
  >(GetBreweryDocument, {
    alias: "withGetBrewery",
    ...operationOptions
  });
}

export function useGetBreweryQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<GetBreweryQueryVariables>
) {
  return ReactApolloHooks.useQuery<GetBreweryQuery, GetBreweryQueryVariables>(
    GetBreweryDocument,
    baseOptions
  );
}
