import * as React from 'react';
import i18next from 'i18next';
import './css/Contributor.css';
import { withTranslation } from 'react-i18next';

export default class Contributor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.id, contributor: null };
    }

    render() {
        if (this.state.contributor == null) {
            this.loadContributor();
            return (<div>{i18next.t("Loading")}...</div>);
        }     

        return (
            <div className="contributor">
                <div className="contributor-photo" style={{ backgroundImage: "url('/images/" + this.state.contributor.image + "')" }}></div>
                <div className="contributor-name">{this.state.contributor.name}</div>
            </div>
            );
    }

    async loadContributor() {
        const response = await fetch('contributors/' + this.state.id);
        const data = await response.json();
        this.setState({ contributor: data });
    };
}

//export default withTranslation()(Contributor)