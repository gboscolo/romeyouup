import * as React from 'react';
import './css/PanelImage.css';

export default class PanelImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (<img className="panel-image"></img>);
    }
}