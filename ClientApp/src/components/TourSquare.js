import * as React from 'react';
import { Link } from "react-router-dom";

export class TourSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tour: props.tour };
    }

    static GetModalityBadge(modality) {
        switch (modality) {
            case 1:
                return (<span className="modality modality-walk"></span>);
            case 2:
                return (<span className="modality modality-bike"></span>);
        }
    }

    render() {
        return (
            <Link to={"/tour/" + this.state.tour.id} key={this.state.tour.id}>
                <div className="tour-item" key={this.state.tour.id} title={this.state.tour.title + " " + this.state.tour.content} style={{ backgroundImage: "url('/images/" + this.state.tour.images[0] + "')" }}>
                    {TourSquare.GetModalityBadge(this.state.tour.modality)}
                    <div className="overlay"></div>
                    <h5 className="tour-title ellipsis">{this.state.tour.title}</h5>
                </div>
            </Link>
        );
    }
}