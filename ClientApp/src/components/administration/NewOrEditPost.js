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
                body: JSON.stringify({ id: this.state.id > 0 ? this.state.id : 0 , title: this.state.title, content: this.state.content, author: this.state.author, date: new Date(), rawImages: this.state.rawImages, type: 1 }),
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
        else {
            this.state.post = {};
        }

        return (<div className="main-container align-center">
            <BrandHeader dark={true} />
            <Container>
                <h3>{this.state.id > -1 ? "Modifica post" : "Nuovo post"}  </h3>
                <Row>
                    <Col xs="12" md="3">Autore</Col>
                    <Col xs="12" md="9"><ContributorsSelect
                        onChange={(e) => { this.handleChange("author", e) }}
                        selected={this.state.post.author}
                        setValues={(initialValue) => { this.state.author = initialValue; }}
                    ></ContributorsSelect></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">Titolo</Col>
                    <Col xs="12" md="9"><Input
                        onChange={this.handleChange.bind(this, 'title')} 
                        placeholder="Titolo del post"
                        value={this.state.post.title}></Input></Col>
                </Row>
                <Row>
                    <Col xs="12" md="3">Contenuto</Col>
                    <Col xs="12" md="9"><textarea
                        onChange={this.handleChange.bind(this, 'content')}                         
                        rows="5" className="form-control" placeholder="Contenuto del post" value={this.state.post.content}></textarea></Col>
                </Row>
               
                <Row>
                    <Col xs="12" md="3">Immagini</Col>
                    <Col xs="12" md="9">
                        <ImageSelectPreview
                            maxImageSize={4000}
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
        this.setState({ post: data });
    }
}

export default withTranslation()(NewOrEditPost);