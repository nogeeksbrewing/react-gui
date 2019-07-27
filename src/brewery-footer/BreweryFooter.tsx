import * as React from 'react';
import { GetBreweryQuery } from '../generated/graphql';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { TwitterFollowButton } from 'react-twitter-embed';
// import { FacebookProvider, Like } from 'react-facebook';

interface Props {
  data: GetBreweryQuery;
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  socialContainer: {
    textAlign: 'center',
    marginTop: '12px'
  }
}));

const BreweryFooter: React.FC<Props> = ({ data }) => (
  <footer className={useStyles().footer}>
    <Typography variant="h6" align="center" gutterBottom>
      {data.brewery!.name}
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      {data.brewery!.location}
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      {data.brewery!.established}
    </Typography>
    {/* <div hidden className={useStyles().socialContainer}>
      <TwitterFollowButton screenName={'nogeeksbrewing'} />
    </div>
    <div hidden className={useStyles().socialContainer}>
      <FacebookProvider appId="445785189605416">
        <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
      </FacebookProvider>
    </div> */}
  </footer>
);

export default BreweryFooter;
