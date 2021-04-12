import React, { Component } from 'react';
import BrandHeader from './BrandHeader';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { Container } from 'reactstrap';
import "./css/Administration.css";

export class Administration extends Component {
  render () {
    return (
        <div className="main-container align-center">
            <BrandHeader dark={true} />
            <Container>
                <Link to="/administration/neworeditpost/-1">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Nuovo post</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Crea un nuovo post e pubbblicalo immediatamente sul sito!</CardSubtitle>
                    </CardBody>
                    </Card>
                </Link>
                <Link to="/administration/neworedittour/-1">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Nuovo tour</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Crea un nuovo tour e pubbblicalo immediatamente sul sito!</CardSubtitle>
                        </CardBody>
                    </Card>
                </Link>
                <Link to="/administration/managetours">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Gestisci tour esistenti</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Vedi i posts gia' pubblicati, modificali o eliminali!</CardSubtitle>
                        </CardBody>
                    </Card>
                </Link>
                <Link to="/administration/manageposts">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Gestisci post esistenti</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">edi i tours gia' pubblicati, modificali o eliminali!</CardSubtitle>
                        </CardBody>
                    </Card>
                </Link>
            </Container>
      </div>
    );
  }
}
