import React from "react";
import { useGetRecipesQuery } from '../generated/graphql';
import RecipeList from './RecipeList';

const RecipeListContainer = () => {
  const { data, error, loading } = useGetRecipesQuery();

  if (loading) {
    return <div></div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  if (data.recipes) {
    data.recipes.sort((r1, r2) => {
      return r1!.date > r2!.date ? -1 : 1;
    })
  }

  return <RecipeList data={data}/>;
};

export default RecipeListContainer;