import React from "react";
import { useGetRecipeSummariesQuery } from './generated/graphql';
import RecipeSummaryList from './RecipeSummaryList';
import moment from 'moment';

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

    data.recipes.forEach( (recipe) => {
      recipe!.planned = moment(recipe!.date, 'YYYY-MM-DD').isAfter(moment());
      recipe!.brewer = 'Allan Lewis';
      recipe!.version = '1.0';
    });
  }

  return <RecipeSummaryList data={data}/>;
};

export default RecipeSummaryListContainer;