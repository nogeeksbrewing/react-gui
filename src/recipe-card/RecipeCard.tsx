
import React from 'react';
import { Recipe } from '../generated/graphql';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import background from '../hops.svg';
import './RecipeCard.css';
import Moment from 'react-moment';

interface Props {
  data: Recipe;
}

const RecipeCard: React.FC<Props> = ({ data }) => (
  <React.Fragment>
    <Card className="recipe-card">
        <CardHeader
        title={data.name}
        subheader={data.style}
        className="recipe-header"
      />
        <CardContent className="recipe-card-content">
        <Typography variant="body1">
            Brew date{data.planned ? ' (planned)' : ''}:
        </Typography>
        <Typography variant="body2" color="textSecondary">
            <Moment parse="YYYY-MM-DD" format="dddd, MMMM Do, YYYY">
                {data.date}
            </Moment>
        </Typography>
        <Typography variant="body1">
            Brewed by:
        </Typography>
        <Typography variant="body2" color="textSecondary">
            {data.brewer} {data.assistant ? ' (w/ ' + data.assistant + ')' : ''}
        </Typography>
        <Typography variant="body1">
            Version:
        </Typography>
        <Typography variant="body2" color="textSecondary">
            {data.version}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
            Details
        </Button>
        </CardActions>
    </Card>
  </React.Fragment>
);

export default RecipeCard;
