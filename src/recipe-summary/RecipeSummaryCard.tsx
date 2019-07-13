import React from 'react';
import { RecipeSummary } from '../generated/graphql';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';

interface Props {
  data: RecipeSummary;
}

const useStyles = makeStyles(theme => ({
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
    }
  }));

const RecipeSummaryCard: React.FC<Props> = ({ data }) => (
  <React.Fragment>
    <Card className={useStyles().card}>
        <CardMedia
        className={useStyles().cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
        />
        <CardContent className={useStyles().cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
            {data.name}
        </Typography>
        <Typography>
            {data.style}
        </Typography>
        <Typography>
        <Moment parse="YYYY-MM-DD" format="dddd, MMMM Do YYYY">
            {data.date}
        </Moment>
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
            View
        </Button>
        </CardActions>
    </Card>
  </React.Fragment>
);

export default RecipeSummaryCard;
