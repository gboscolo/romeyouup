import React, { Component } from 'react';
import './css/BrandHeader.css';
import logo from '../assets/images/logo.svg';
import logoDark from '../assets/images/logo-dark.svg';
import Language from './Language';
import hamburger from '../assets/images/hamburger.svg';
import { slide as Menu } from 'react-burger-menu';
// https://www.npmjs.com/package/react-burger-menu
import { Link } from "react-router-dom";
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

export class BrandHeader extends React.Component {
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
                <div className={"link-container" + (this.state.dark ? " dark" : "")}>
                    <Link className="link" to="/WhoWeAre">{i18next.t("WhoWeAre")}</Link>
                    <Link className="link middle" to="/OurProposals">{i18next.t("OurProposals")}</Link>
                    <Link className="link" to="/Contacts">{i18next.t("Contacts")}</Link>

                    <Language/>
                </div>
            </div>
        );
    }
}

export default withTranslation()(BrandHeader)