import * as React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

export class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { textareaMessage: props.textareaMessage, email: "", name: "", message: "" };
    }

    handleChange = function(field, e) {
        var nextState = {};
        nextState[field] = e.target.value;
        this.setState(nextState);
    }

    handleSubmit = function(e) {
        e.preventDefault();
        var data = new FormData();
        data.append("email", JSON.stringify({ email: this.state.email, name: this.state.name, message: this.state.message }));
        
        fetch('email',
            {
                method: "POST",
                body: JSON.stringify({ sender: this.state.email, name: this.state.name, message: this.state.message }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).
            then(response => response.text())
            .then(data => {
                this.state.email = this.state.name = this.state.message = "";
            })
            .catch(() => {

            });
    }   

    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="name" sm={2}>{i18next.t('YourName')}</Label>
                    <Col sm={10}><Input type="text" name="name" id="name" placeholder={i18next.t('YourName')} onChange={this.handleChange.bind(this, 'name')} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={2}>{i18next.t('YourEmail')}</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder={i18next.t('YourEmail')} onChange={this.handleChange.bind(this, 'email')} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="messageTextarea" sm={2}>{this.state.textareaMessage}</Label>
                    <Col sm={10}>
                        <Input type="textarea" rows="4" name="text" id="messageTextarea" placeholder={this.state.textareaMessage} onChange={this.handleChange.bind(this, 'message')} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}></Label>
                    <Col sm={10}>
                        <Button onClick={(e) => { this.handleSubmit(e) }}>{i18next.t('Send')}</Button>
                    </Col>
                </FormGroup>
            </Form>
            );
    }
}

export default withTranslation()(ContactForm)