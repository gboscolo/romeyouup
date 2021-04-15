import * as React from 'react';
import BrandHeader from './BrandHeader';
import Footer from './Footer';
import { Container } from 'reactstrap';
import ContactForm from './ContactForm';
import i18next from 'i18next';
import './css/Contacts.css';
import { withTranslation } from 'react-i18next';


export class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <React.Fragment>
                <BrandHeader dark={true} />
                <div className='image-background'>
                    <Container className="contacts-form">
                        <h3>{i18next.t("ContactUsMessage")}</h3>
                        <p><em>{i18next.t("ContactsHint")}</em></p>
                        <ContactForm textareaMessage={i18next.t("YourMessage")} />
                    </Container>

                    <Footer />
                </div>                
            </React.Fragment>
        );
    }
}

export default withTranslation()(Contacts);