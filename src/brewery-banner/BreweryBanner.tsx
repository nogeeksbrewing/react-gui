import * as React from 'react';
import { GetBreweryQuery } from '../generated/graphql';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../nogeeks.svg';

interface Props {
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
      <img src={logo} className="logo-image" alt={data.brewery!.name} />
    </Container>
  </div>
);

export default BreweryBanner;
