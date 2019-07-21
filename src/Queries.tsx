import gql from "graphql-tag";

const BREWERY_QUERY = gql`
  query GetBrewery {
    brewery {
      name
      location
      established
    }
  }
`;       

const RECIPE_SUMMARY_QUERY = gql`
  query GetRecipes {
    recipes {
      id
      name
      style
      date
      brewer
      assistant
      version
      planned
    }
  }
`;  