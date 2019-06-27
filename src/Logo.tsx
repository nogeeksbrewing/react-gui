
import React from 'react';
import './Logo.css';
import logo from './nogeeks.svg';

class Logo extends React.Component {

    render() {
        return (
            <div className="LogoContainer">
                <img src={logo} className="LogoImage" alt="logo" />
                <div className="LogoName">
                    {/* {this.props.brewery.name} */}
                </div>
                <div className="LogoEstablished">
                    {/* {this.props.brewery.established} */}
                </div>
                <div className="LogoLocation">
                    {/* {this.props.brewery.location} */}
                </div>
            </div>
        );
    }

}

export default Logo;