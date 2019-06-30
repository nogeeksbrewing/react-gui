import * as React from 'react';
import { GetBreweryQuery } from './generated/graphql';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export interface OwnProps {

}

interface Props extends OwnProps {
  data: GetBreweryQuery;
}

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
  }));

const BreweryHeader: React.FC<Props> = ({ data }) => (
    <AppBar position="relative">
    <Toolbar>
      <Menu className={useStyles().icon} />
      <Typography variant="h6" color="inherit" noWrap>
        {data.brewery ? data.brewery.name : ""}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default BreweryHeader;
