import React from 'react';
import './css/BrandHeader.css';
import logo from '../assets/images/logo.svg';
import logoDark from '../assets/images/logo-dark.svg';
import Language from './Language';
import { Link } from "react-router-dom";
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import { slide as Menu } from 'react-burger-menu';
import { createBrowserHistory } from "history";

export class BrandHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dark: props.dark, openMenu: false, isHome: props.isHome };
    }
    setHamburgerState() {
        this.setState({ openMenu: !this.state.openMenu });
    }

    render() {
        const history = createBrowserHistory();
        const location = history.location.pathname.toLowerCase();
        return (
            <div className={"brand-header " + (this.state.isHome ? "home":"")}>
                <Link to={"/"}>
                <img className="header-logo" alt="logo" src={this.state.dark ? logoDark : logo}></img>
                </Link>
                <div className={"link-container" + (this.state.dark ? " dark" : "")}>
                    <Link className={"link " + (location == "/whoweare" ? "selected":"")} to="/WhoWeAre">{i18next.t("WhoWeAre")}</Link>
                    <Link className={"link middle " + (location == "/ourproposals" ? "selected" : "")} to="/OurProposals">{i18next.t("OurProposals")}</Link>
                    <Link className={"link " + (location == "/contacts" ? "selected" : "")} to="/Contacts">{i18next.t("Contacts")}</Link>
                    <Language/>
                </div>
            </div>
        );
    }
}

export default withTranslation()(BrandHeader)