import React, { Component } from 'react';
import './css/BrandHeader.css';
import logo from '../assets/images/logo.svg';
import logoDark from '../assets/images/logo-dark.svg';
import hamburger from '../assets/images/hamburger.svg';
import { Link } from "react-router-dom";

export default class BrandHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dark: props.dark };
    }
    render() {
        return (
            <div className="brand-header">
                <Link to={"/"}>
                <img className="header-logo" alt="logo" src={this.state.dark ? logoDark : logo}></img>
            </Link>
            <div className={"link-container" + (this.state.dark ? " dark":"")}>
                <Link className="link" to="/WhoWeAre">Chi siamo</Link>
                <Link className="link middle" to="/OurProposals">Le nostre proposte</Link>
                <Link className="link" to="/Contacts">Contatti</Link>
            </div>
        </div>
        );
    }
}