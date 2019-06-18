
import React from 'react';
import './Logo.css';
import logo from './nogeeks.svg';

class Logo extends React.Component {

    render() {
        return (
            <div className="LogoContainer">
                <img src={logo} className="LogoImage" alt="logo" />
                <div>
                    {this.props.brewery.name}
                </div>
            </div>
        );
    }

}

export default Logo;