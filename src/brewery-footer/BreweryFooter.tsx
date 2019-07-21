import * as React from 'react';
import { GetBreweryQuery } from '../generated/graphql';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
  </footer>
);

export default BreweryFooter;
