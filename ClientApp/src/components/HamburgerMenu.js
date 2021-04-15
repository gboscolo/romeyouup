import * as React from 'react';
import { withTranslation } from 'react-i18next';
import LanguageMenu from './LanguageMenu';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import logo from '../assets/images/logo.svg';
import i18next from 'i18next';

export class HamburgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu() {
        this.setState({ menuOpen: false })
    }

    // This can be used to toggle the menu, e.g. when using a custom icon
    // Tip: You probably want to hide either/both default icons if using a custom icon
    // See https://github.com/negomi/react-burger-menu#custom-icons
    toggleMenu() {
        this.setState(state => ({ menuOpen: !state.menuOpen }))
    }
    render() {
        const menuStyles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '36px',
                height: '30px',
                left: '36px',
                top: '36px'
            },
            bmBurgerBars: {
                background: '#373a47'
            },
            bmBurgerBarsHover: {
                background: '#a90000'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#bdc3c7'
            },
            bmMenuWrap: {
                position: 'fixed',
                height: '100%'
            },
            bmMenu: {
                background: '#373a47',
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em'
            },
            bmMorphShape: {
                fill: '#373a47'
            },
            bmItemList: {
                color: '#b8b7ad',
                padding: '0.8em'
            },
            bmItem: {
                display: 'inline-block'
            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
            }
        }
        return (
            <div className="hamburger-menu">
                <Menu width={'380px'} styles={menuStyles} isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}>
                    <img onClick={() => this.closeMenu()} className="header-logo hamburger-ryu-logo" alt="logo" src={logo}></img>
                    <Link onClick={() => this.closeMenu()} className="burger-link" to="/WhoWeAre">{i18next.t("WhoWeAre")}</Link>
                    <Link onClick={() => this.closeMenu()} className="burger-link" to="/OurProposals">{i18next.t("OurProposals")}</Link>
                    <Link onClick={() => this.closeMenu()} className="burger-link" to="/Contacts">{i18next.t("Contacts")}</Link>
                    <LanguageMenu />
                </Menu>
            </div>
            );
    }
}