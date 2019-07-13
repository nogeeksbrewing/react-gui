import * as React from 'react';
import { GetRecipeSummariesQuery } from './generated/graphql';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import RecipeSummaryCard from './recipe-summary/RecipeSummaryCard';

export interface OwnProps {

}

interface Props extends OwnProps {
  data: GetRecipeSummariesQuery;
}

const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  }));

const RecipeSummaryList: React.FC<Props> = ({ data }) => (
    <React.Fragment>
        <Container className={useStyles().cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {!!data.recipes && data.recipes.map(recipe => (
              <Grid item key={!!recipe ? recipe.id : ""} xs={12} sm={6} md={4}>
                <RecipeSummaryCard data={recipe!}/>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>
);

export default RecipeSummaryList;
