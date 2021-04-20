import 'bootstrap/dist/css/bootstrap.css';
import { unregister } from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
//https://www.npmjs.com/package/react-cookie-consent
import CookieConsent from "react-cookie-consent";
import i18next from 'i18next';
import { HamburgerMenu } from './components/HamburgerMenu';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
    <I18nextProvider i18n={i18n}>
        <BrowserRouter basename={baseUrl}>
            <CookieConsent
                location="bottom"
                buttonText={i18next.t("Accept")}
                cookieName="romeyouupcookieconsent"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                {i18next.t("CookieConsentText")}.{" "}
            </CookieConsent>
            <HamburgerMenu/>
            <App />
        </BrowserRouter>
    </I18nextProvider>,
  rootElement);

unregister();