import * as React from 'react';
import i18next from 'i18next';
import Contributor from './Contributor';
import { Link } from 'react-router-dom';


export default class ContributorsSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.id, contributors: null};
    }

    render() {
        if (this.state.contributors == null) {
            this.loadContributors();
            return (<div>{i18next.t("Loading")}...</div>);
        }     

        return (
            <div>
                {this.state.contributors.map(item =>
                    <Link to={"contributordetail/" + item.id}>
                        <Contributor key={item.id} contributor={item} />
                    </Link>
                )}
            </div>
        );
    }

    async loadContributors() {
        const response = await fetch('contributors/');
        const data = await response.json();
        this.setState(state => ({ contributors: data }));
    };
}

//export default withTranslation()(Contributor)