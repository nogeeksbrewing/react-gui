import React from "react";
import { useGetBreweryQuery } from "./generated/graphql";
import Brewery from './Brewery';

const BreweryContainer = () => {
  const { data, error, loading } = useGetBreweryQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  console.log(data);

  return <Brewery data={data} />;
};

export default BreweryContainer;