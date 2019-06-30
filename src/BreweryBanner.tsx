import * as React from 'react';
import { GetBreweryQuery } from './generated/graphql';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

export interface OwnProps {

}

interface Props extends OwnProps {
    data: GetBreweryQuery;
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

const BreweryBanner: React.FC<Props> = ({ data }) => (
        <div className={useStyles().heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {data.brewery ? data.brewery.name : ""}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {data.brewery ? data.brewery.established : ""}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {data.brewery ? data.brewery.location : ""}
            </Typography>
            </Container>
            </div>
);

export default BreweryBanner;
