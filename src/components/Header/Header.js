import React from "react";
import './Header.css';
import logo from '../../assets/logo.png';

class Header extends React.Component {

    render() {
        return (
            <div className="logo"><img className="logo-img" src={logo} alt="logo"/></div>
        )
    }
}

export default Header;