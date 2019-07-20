import React from "react";
import { useGetRecipeSummariesQuery } from '../generated/graphql';
import RecipeSummaryList from './RecipeSummaryList';

const RecipeSummaryListContainer = () => {
  const { data, error, loading } = useGetRecipeSummariesQuery();

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

  return <RecipeSummaryList data={data}/>;
};

export default RecipeSummaryListContainer;