import React from 'react';
import { RecipeSummary } from '../generated/graphql';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import logo from '../nogeeks.svg';

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
        // background: 'red',
        // height: 0,
        // width: '100%',
        // background: 'red',
        // paddingTop: '56.25%', // 16:9
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
            image={logo}
            component="img"
            title="No Geeks Brewing logo"
        />
        <CardHeader title={data.name} subheader={data.style}/>
        <CardContent className={useStyles().cardContent}>
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
            {data.brewer}
        </Typography>
        <Typography variant="body1">
            Version:
        </Typography>
        <Typography variant="body2" color="textSecondary">
            {data.version}
        </Typography>
        {/* <Typography>
            Version {data.version}
        </Typography>
        <Typography>
            Brewed by {data.brewer}
        </Typography> */}
        {/* {/* <TwitterFollowButton screenName={data.brewer.replace('twitter:@', '')}/> */}
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
            Details
        </Button>
        </CardActions>
    </Card>
  </React.Fragment>
);

export default RecipeSummaryCard;
