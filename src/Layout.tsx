import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BreweryBanner from './brewery-banner/BreweryBanner';
import { GetBreweryQuery } from './generated/graphql';
import RecipeListContainer from './recipe-list/RecipeListContainer';
import BreweryFooter from './brewery-footer/BreweryFooter';

export interface OwnProps {

}

interface Props extends OwnProps {
  data: GetBreweryQuery;
}

const Layout: React.FC<Props> = ({ data }) => (
  <React.Fragment>
    <CssBaseline />
    {/* <BreweryHeader data={data} /> */}
    <main>
      <BreweryBanner data={data} />
      <RecipeListContainer />
    </main>
    <BreweryFooter data={data} />
  </React.Fragment>
);

export default Layout;
