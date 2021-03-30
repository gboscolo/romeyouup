import * as React from 'react';
import './css/PanelMessage.css';
import { Link } from "react-router-dom";

export default class PanelMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (<div className="panel-message hidden-md-down">
            <h1>Roma</h1>
            <h3>Come non l'hai mai vista</h3>
            <div className="buttons-container">
                <Link to="/whoweare">
                    <button>Chi siamo</button>
                </Link>
                <Link to="/ourproposals">
                    <button>Le nostre proposte</button>
                </Link>
                </div>
        </div>);
    }
}