import * as React from 'react';
import { GetBreweryQuery } from './generated/graphql';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

export interface OwnProps {

}

interface Props extends OwnProps {
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
      Footer
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Something here to give the footer a purpose!
    </Typography>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  </footer>
);

export default BreweryFooter;
