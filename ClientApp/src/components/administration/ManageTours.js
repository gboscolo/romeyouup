import * as React from 'react';
import i18next from 'i18next';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import BrandHeader from '../BrandHeader';

export default class ManageTours extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id, post: null };
    }

    render() {
        return (<div className="main-container align-center">
            <BrandHeader dark={true} />
            <Container>
               manage tours
            </Container>
        </div>);
    }
}