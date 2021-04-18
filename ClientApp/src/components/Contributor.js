import * as React from 'react';
import i18next from 'i18next';
import './css/Contributor.css';
import { withTranslation } from 'react-i18next';
import { LoadingAnimation } from './LoadingAnimation';

export default class ContributorDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.id, contributor: this.props.contributor, mode: this.props.mode};
    }

    render() {
        if (this.state.contributor == null) {
            this.loadContributor();
            return (<LoadingAnimation/>);
        }     

        return (
            <div className={"contributor" + (this.state.mode == 1 ? " light": "")}>
                <div className="contributor-photo" style={{ backgroundImage: "url('/images/" + this.state.contributor.image + "')" }} title={this.state.contributor.name}></div>
                <div className="contributor-name">{this.state.contributor.name}</div>
            </div>
            );
    }

    async loadContributor() {
        const response = await fetch('contributors/' + this.state.id);
        const data = await response.json();
        this.setState(state => ({ contributor: data, mode: state.mode }));
    };
}

//export default withTranslation()(Contributor)