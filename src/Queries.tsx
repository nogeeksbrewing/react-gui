import gql from "graphql-tag";

const BREWERY_QUERY = gql`
  query GetBrewery {
    brewery {
      name
      id
      location
      established
    }
  }
`;       