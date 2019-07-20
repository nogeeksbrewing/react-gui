import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BreweryHeader from './brewery-header/BreweryHeader';
import BreweryBanner from './BreweryBanner';
import { GetBreweryQuery } from './generated/graphql';
import RecipeSummaryListContainer from './RecipeSummaryListContainer';
import BreweryFooter from './BreweryFooter';

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
      <RecipeSummaryListContainer />
    </main>
    <BreweryFooter data={data} />
  </React.Fragment>
);

export default Layout;
