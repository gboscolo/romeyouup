import * as React from 'react';
import './css/Footer.css';
import i18next from 'i18next';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (<footer>
                <div className={"social-buttons"}>
                   
                <a className="social-button facebook" href={"https://www.facebook.com/romeyouup/"} target="_blank"></a>
                <a className="social-button instagram" href={"https://www.instagram.com/romeyouup/"} target="_blank"></a>
                <a className="social-button mail" href={"mailto:info@romeyouup.it"} target="_blank"></a>
                </div>
        </footer>);
    }
}