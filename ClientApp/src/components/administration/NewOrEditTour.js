import * as React from 'react';
import i18next from 'i18next';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import BrandHeader from '../BrandHeader';
import { withTranslation } from 'react-i18next';
import ImageSelectPreview from 'react-image-select-pv';
import { Container, Row, Col, Input, Button } from 'reactstrap';

export class NewOrEditTour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id, loaded: this.props.match.params.id == -1, isvalid: this.props.match.params.id == -1, title: "",
            caption: "", duration: 0, cost: 0, summary: "", description: "", additionalInfo: "",
            willSee: "", type: 1, images: [], modality: 1, rawImages: []
        };
    }

    handleChange = function (field, e) {
        var nextState = { ...this.state };
        if (field == "images" && e.length > 0) {
            nextState.rawImages = [];
            e.forEach((image) => {
                nextState.rawImages.push(image.content.slice(image.content.indexOf("base64,") + 7));
            });

            this.setState(nextState);
            return;
        }
        nextState[field] = e.target.value;
        this.setState(nextState);
    }

    handleSubmit = function () {
        this.setState({ isvalid: false });
        fetch('tours',
            {
                method: "POST",
                body: JSON.stringify({ id: this.state.id > 0 ? this.state.id : 0, title: this.state.title, caption: this.state.caption, duration: this.state.duration + "", cost: this.state.cost + "", summary: this.state.summary, description: this.state.description, additionalInfo: this.state.additionalInfo, willSee: this.state.willSee, type: parseInt(this.state.type), modality: parseInt(this.state.modality), rawImages: this.state.rawImages, images: this.state.images }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).
            then(response => response.text())
            .then(data => {
                if (parseInt(data) != -1) {
                   this.props.history.push('/tour/' + data)
                }
            })
            .catch(() => {
                alert("Error");
            });
    }

    render() {
        if (!this.state.loaded) {
            this.loadTour();
            return (<div>{i18next.t("Loading")}...</div>);
        }

        return (<div className="main-container align-center">
            <BrandHeader dark={true} />
            <Container>
                <h3>{i18next.t(this.state.id > -1 ? "EditTour" : "NewTour")}</h3>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Title")}</Col>
                    <Col xs="12" md="9"><Input
                        onChange={this.handleChange.bind(this, 'title')}
                        placeholder={i18next.t("Title")}
                        value={this.state.title}></Input></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Caption")}</Col>
                    <Col xs="12" md="9"><Input
                        onChange={this.handleChange.bind(this, 'caption')}
                        placeholder={i18next.t("Caption")}
                        value={this.state.caption}></Input></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Duration")}</Col>
                    <Col xs="12" md="9"><Input type="number"
                        onChange={this.handleChange.bind(this, 'duration')}
                        placeholder={i18next.t("Duration")}
                        value={this.state.duration}></Input></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Cost")}</Col>
                    <Col xs="12" md="9"><Input type="number"
                        onChange={this.handleChange.bind(this, 'cost')}
                        placeholder={i18next.t("Cost")}
                        value={this.state.cost}></Input></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Summary")}</Col>
                    <Col xs="12" md="9"><Input
                        onChange={this.handleChange.bind(this, 'summary')}
                        placeholder={i18next.t("Summary")}
                        value={this.state.summary}></Input></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Description")}</Col>
                    <Col xs="12" md="9"><Input
                        onChange={this.handleChange.bind(this, 'description')}
                        placeholder={i18next.t("Description")}
                        value={this.state.description}></Input></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("AdditionalInfo")}</Col>
                    <Col xs="12" md="9"><Input
                        onChange={this.handleChange.bind(this, 'additionalInfo')}
                        placeholder={i18next.t("AdditionalInfo")}
                        value={this.state.additionalInfo}></Input></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("WhatWeWillSee")}</Col>
                    <Col xs="12" md="9"><Input
                        onChange={this.handleChange.bind(this, 'willSee')}
                        placeholder={i18next.t("WhatWeWillSee")}
                        value={this.state.willSee}></Input></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Type")}</Col>
                    <Col xs="12" md="9"><select className="form-control" value={this.state.type} onChange={this.handleChange.bind(this, 'type')}>
                        <option value="1" key="1">{i18next.t("Experiences")}</option>
                        <option value="2" key="2">{i18next.t("Walkingtours")}</option>
                        <option value="3" key="3">{i18next.t("Museums")}</option>

                    </select></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Modality")}</Col>
                    <Col xs="12" md="9">
                        <select className="form-control" value={this.state.modality} onChange={this.handleChange.bind(this, 'modality')}>
                            <option value="1" key="1">{i18next.t("WalkTour")}</option>
                            <option value="2" key="2">{i18next.t("BikeTour")}</option>

                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Images")}</Col>
                    <Col xs="12" md="9">
                        <ImageSelectPreview
                            maxImageSize={4 * 1024 * 1024}
                            max={4}
                            imageTypes="jpg"
                            onChange={data => this.handleChange('images', data)} />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Button disabled={!this.state.isvalid} onClick={(e) => { this.handleSubmit(e) }}>{i18next.t('Send')}</Button>
                    </Col>
                </Row>
            </Container>
        </div>);
    }

    async loadTour() {
        const response = await fetch('tours/' + this.state.id);
        const data = await response.json();
        data.loaded = true;
        data.isvalid = true;
        this.setState(data);
    }
}

export default withTranslation()(NewOrEditTour);