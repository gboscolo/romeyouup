import * as React from 'react';
import './css/PanelMessage.css';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';

import { Link } from "react-router-dom";

export class PanelMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (<div className="panel-message hidden-md-down">
            <h1>{i18next.t("Rome")}</h1>
            <h3>{i18next.t("AsYouNeverSeen")}</h3>
            <div className="buttons-container">
                <Link to="/whoweare">
                    <button>{i18next.t("WhoWeAre")}</button>
                </Link>
                <Link to="/ourproposals">
                    <button>{i18next.t("OurProposals")}</button>
                </Link>
                </div>
        </div>);
    }
}

export default withTranslation()(PanelMessage)