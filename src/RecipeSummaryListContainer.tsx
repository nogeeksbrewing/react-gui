import React from "react";
import { useGetRecipeSummariesQuery } from './generated/graphql';
import RecipeSummaryList from './RecipeSummaryList';

const RecipeSummaryListContainer = () => {
  const { data, error, loading } = useGetRecipeSummariesQuery();

  if (loading) {
    return <div></div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <RecipeSummaryList data={data}/>;
};

export default RecipeSummaryListContainer;