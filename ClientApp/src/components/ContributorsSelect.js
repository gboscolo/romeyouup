import * as React from 'react';
import i18next from 'i18next';
import Contributor from './Contributor';


export default class ContributorsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.id, contributors: null, selected: this.props.selected, onChange: this.props.onChange, setValues: this.props.setValues };
    }

    render() {
        if (this.state.contributors == null) {
            this.loadContributors();
            return (<div>{i18next.t("Loading")}...</div>);
        }     

        return (
            <select className="form-control" value={this.props.selected} onChange={this.state.onChange}>
                {this.state.contributors.map(item =>
                    <option value={item.id} key={item.id}>{item.name}</option>
                )}
            </select>
        );
    }

    async loadContributors() {
        const response = await fetch('contributors/');
        const data = await response.json();
        let selected = this.state.selected
        if (!selected && data != null && data.length > 0) {
            selected = data[0].id;
        }
        this.state.setValues(selected);

        this.setState(state => ({ contributors: data, selected: selected }));
    };
}