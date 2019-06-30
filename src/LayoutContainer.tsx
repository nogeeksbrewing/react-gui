import React from "react";
import { useGetBreweryQuery } from './generated/graphql';
import Layout from "./Layout";

export default function LayoutContainer() {
    const { data, error, loading } = useGetBreweryQuery();
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error || !data) {
      return <div>ERROR</div>;
    }

    return <Layout data={data} />

}
