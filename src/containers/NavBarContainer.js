import React from 'react';
import logo from '../images/logo.png';

export default class NavBarContainer extends React.Component {

    render() {

        return(
            <div id="navbar-container">
                <div id="brand">
                    <img src={logo} />
                </div>
                <div id="navbar-items">
                <div>Item1</div>
                <div>Item2</div>
                <div>Item3</div>
                </div>
                
                <div id="login">Login / Username</div>
            </div>
            
        )
    }
}