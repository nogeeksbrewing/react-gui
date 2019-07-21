import * as React from 'react';
import { GetRecipesQuery } from '../generated/graphql';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import RecipeCard from '../recipe-card/RecipeCard';

export interface OwnProps {

}

interface Props extends OwnProps {
  data: GetRecipesQuery;
}

const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  }));

const RecipeList: React.FC<Props> = ({ data }) => (
    <React.Fragment>
        <Container className={useStyles().cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {!!data.recipes && data.recipes.map(recipe => (
              <Grid item key={!!recipe ? recipe.id : ""} xs={12} sm={6} md={4}>
                <RecipeCard data={recipe!}/>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>
);

export default RecipeList;
