import * as React from 'react';
import { GetBreweryQuery } from './generated/graphql';
import logo from './nogeeks.svg';

export interface OwnProps {

}

interface Props extends OwnProps {
  data: GetBreweryQuery;
}

const Brewery: React.FC<Props> = ({ data }) => (
    <div className="BreweryContainer">
    <img src={logo} className="LogoImage" alt="logo" />
    <div className="BreweryName">
        {data.brewery ? data.brewery.name : ""}
    </div>
    <div className="BreweryEstablished">
        {data.brewery ? data.brewery.established : ""}
    </div>
    <div className="BreweryLocation">
        {data.brewery ? data.brewery.location : ""}
    </div>
</div>
);

export default Brewery;
