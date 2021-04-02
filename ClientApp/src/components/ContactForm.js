import * as React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

export class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textareaMessage: props.textareaMessage, email: "", name: "", message: "", errors: {}, isvalid: false};
    }

    handleChange = function(field, e) {
        var nextState = {};
        nextState[field] = e.target.value;
        this.setState(nextState, this.validateForm);
    }

    validateForm = function () {
        this.state.errors["errorsend"] = this.state.errors["successsend"] = "";
        let errors = {};
        let isvalid = true;
        if (!this.state.name) {
            errors["name"] = i18next.t("CompileField");
            isvalid = false;
        }
        if (!this.state.message) {
            errors["message"] = i18next.t("CompileField");
            isvalid = false;
        }
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!this.state.email || !pattern.test(this.state.email)) {
            errors["email"] = i18next.t("NotValidEmail");
            isvalid = false;
        }

        this.setState({
            errors: errors,
            isvalid: isvalid
        });

        return isvalid; 
    }

    handleSubmit = function (e) {
        e.preventDefault();
        if (!this.validateForm()) { return false; }
        var data = new FormData();
        data.append("email", JSON.stringify({ email: this.state.email, name: this.state.name, message: this.state.message }));
        this.setState({ isvalid: false });
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
                this.state.errors["successsend"] = i18next.t("SuccessWhileMailing");
                this.setState({email:"",name: "", message:""})
            })
            .catch(() => {
                this.state.errors["errorsend"] = i18next.t("ErrorWhileMailing");
            });
    }   

    render() {
        return (
            <Form>
                <div className="text-danger">{this.state.errors["errorsend"]}</div>
                <div className="text-success">{this.state.errors["successsend"]}</div>
                <FormGroup row>
                    <Label for="name" sm={2}>{i18next.t('YourName')}</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" id="name" placeholder={i18next.t('YourName')} onChange={this.handleChange.bind(this, 'name')} value={this.state.name}/>
                        <div className="text-danger">{this.state.errors["name"]}</div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="email" sm={2}>{i18next.t('YourEmail')}</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="email" placeholder={i18next.t('YourEmail')} onChange={this.handleChange.bind(this, 'email')} value={this.state.email} />
                        <div className="text-danger">{this.state.errors["email"]}</div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="messageTextarea" sm={2}>{this.state.textareaMessage}</Label>
                    <Col sm={10}>
                        <Input type="textarea" rows="4" name="text" id="messageTextarea" placeholder={this.state.textareaMessage} onChange={this.handleChange.bind(this, 'message')} value={this.state.message}/>
                        <div className="text-danger">{this.state.errors["message"]}</div>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label sm={2}></Label>
                    <Col sm={10}>
                        <Button disabled={!this.state.isvalid} onClick={(e) => { this.handleSubmit(e) }}>{i18next.t('Send')}</Button>
                    </Col>
                </FormGroup>
            </Form>
            );
    }
}

export default withTranslation()(ContactForm)