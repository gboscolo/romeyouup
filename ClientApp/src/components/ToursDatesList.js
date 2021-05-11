import * as React from 'react';
import './css/Footer.css';
import i18next from 'i18next';
import { NavItem, NavLink } from 'reactstrap';
import { LoadingAnimation } from "./LoadingAnimation";
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./css/ToursCalendar.css";


export default class ToursDatesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tourid: props.tourid, tourdates: props.tourdates };
    }

    render() {

        return (
           <div/>);
    }
}








