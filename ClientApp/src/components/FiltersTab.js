import * as React from 'react';
import "./css/FiltersTab.css";

export default class FiltersTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedItem: props.selectedItem, items: props.items };
    }

    render() {
        let onChange = (e, item) => {
            this.setState({ selectedItem: item.id, items: this.state.items });
            this.props.onChange(item.id);
        }

        return (
            <div className="filters">
                {this.state.items.map(item =>
                    <div className={`filter-item ${this.state.selectedItem == item.id ? " selected" : ""}`} key={item.id} onClick={((e) => onChange(e, item))}>
                        {item.label}
                    </div>
                )}
            </div>
        );
    }
}