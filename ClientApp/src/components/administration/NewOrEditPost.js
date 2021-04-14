import * as React from 'react';
import i18next from 'i18next';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Input, Button} from 'reactstrap';
import BrandHeader from '../BrandHeader';
import ContributorsSelect from '../ContributorsSelect';
import DateSelect from '../DateSelect';
import ImageSelectPreview from 'react-image-select-pv';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';

export class NewOrEditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id, loaded: this.props.match.params.id == -1, rawImages: [], isvalid: this.props.match.params.id == -1};
    }

    handleSubmit = function () {
        this.setState({ isvalid: false });
        fetch('posts',
            {
                method: "POST",
                body: JSON.stringify({ id: this.state.id > 0 ? this.state.id : 0 , title: this.state.title, content: this.state.content, author: this.state.author, date: this.state.id > 0 ? this.state.date : new Date(), rawImages: this.state.rawImages, type: 1, images: this.state.images }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).
            then(response => response.text())
            .then(data => {
                if (parseInt(data) != -1) {
                    this.props.history.push('/post/' + data)
                }
            })
            .catch(() => {
                alert("Error");
            });
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

    render() {
        if (!this.state.loaded) {
            this.loadPost();
            return (<div>{i18next.t("Loading")}...</div>);
        }

        return (<div className="main-container align-center">
            <BrandHeader dark={true} />
            <Container>
                <h3>{i18next.t(this.state.id > -1 ? "EditPost" : "NewPost")}</h3>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Author")}</Col>
                    <Col xs="12" md="9"><ContributorsSelect
                        onChange={(e) => { this.handleChange("author", e) }}
                        selected={this.state.author}
                        setValues={(initialValue) => { this.state.author = initialValue; }}
                    ></ContributorsSelect></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Title")}</Col>
                    <Col xs="12" md="9"><Input
                        onChange={this.handleChange.bind(this, 'title')}
                        placeholder={i18next.t("PostTitle")}
                        value={this.state.title}></Input></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">{i18next.t("Content")}</Col>
                    <Col xs="12" md="9"><textarea
                        onChange={this.handleChange.bind(this, 'content')}
                        rows="5" className="form-control" placeholder={i18next.t("PostContent")} value={this.state.content}></textarea></Col>
                </Row>
               
                <Row>
                    <Col xs="12" md="3">{i18next.t("Images")}</Col>
                    <Col xs="12" md="9">
                        <ImageSelectPreview
                            maxImageSize={4*1024*1024}
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
    async loadPost() {
        const response = await fetch('posts/' + this.state.id);
        const data = await response.json();
        data.loaded = true;
        data.isvalid = true;
        this.setState(data);
    }
}

export default withTranslation()(NewOrEditPost);