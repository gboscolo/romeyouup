import * as React from 'react';
import i18next from 'i18next';
import { NavItem, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import BrandHeader from '../BrandHeader';
import { LoadingAnimation } from '../LoadingAnimation';

export default class ManageTours extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tours: null, loading: true };
    }

    deleteTour= function (id) {
        const url = 'tours/DeleteTour/' + id;

        const options = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
            .then((res) => console.log(res.json(), "res"))
            .then((data) => console.log(data, "data"))
            .catch((err) => console.log(err, "err"));


    }

    render() {
        if (this.state.loading) {
            this.loadTours();
            return (<LoadingAnimation/>);
            }

        return (<div className="main-container align-center">
            <BrandHeader dark={true} />
            <Container>
                <h3>Gestisci post</h3>
                {this.state.tours.map(tour =>
                    <Row key={tour.id}>
                        <Col>{tour.title}</Col>
                        <Col title={tour.description}>{tour.description.substring(0,50)}...</Col>
                        <Col><Link to={"/administration/neworedittour/" + tour.id}>Modifica</Link></Col>
                        <Col><Link to="#" onClick={() => { this.deleteTour(tour.id) }}>Elimina</Link></Col>
                    </Row>
                )}
            </Container>
        </div>);
    }

    async loadTours() {
        const response = await fetch('tours');
        const data = await response.json();
        this.setState({ tours: data, loading: false });
    }
}