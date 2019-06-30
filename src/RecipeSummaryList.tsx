import * as React from 'react';
import { GetRecipeSummariesQuery } from './generated/graphql';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export interface OwnProps {

}

interface Props extends OwnProps {
  data: GetRecipeSummariesQuery;
}

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

const cardStyle = "";//useStyles().card;
const cardContentStyle = "";//useStyles().cardContent;
const cardMediaStyle = "";//useStyles().cardMedia;

const RecipeSummaryList: React.FC<Props> = ({ data }) => (
    <React.Fragment>
        <Container className={useStyles().cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {!!data.recipes && data.recipes.map(recipe => (
              <Grid item key={!!recipe ? recipe.id : ""} xs={12} sm={6} md={4}>
                <Card className={cardStyle}>
                  <CardMedia
                    className={cardMediaStyle}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={cardContentStyle}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {!!recipe ? recipe.name : ""}
                    </Typography>
                    <Typography>
                    {!!recipe ? recipe.style : ""}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>
);

export default RecipeSummaryList;
