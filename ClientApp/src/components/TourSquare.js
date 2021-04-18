import * as React from 'react';
import { Link } from "react-router-dom";
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import i18n from '../i18n';

export class TourSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tour: props.tour };
    }

    static GetModalityBadge(modality) {
        switch (modality) {
            case 1:
                return (<span title={i18next.t("WalkTour") } className="modality modality-walk"></span>);
            case 2:
                return (<span title={i18next.t("BikeTour") } className="modality modality-bike"></span>);
        }
    }

    static GetTourType(type) {
        switch (type) {
            case 1:
                return (<span title={i18next.t("Experiences")} className="type type-experience"></span>);
            case 2:
                return (<span title={i18next.t("Walkingtours")} className="type type-walking"></span>);
            case 3:
                return (<span title={i18next.t("Museums") } className="type type-museums"></span>);
        }
    }

    render() {
        return (
            <Link to={"/tour/" + this.state.tour.id} key={this.state.tour.id}>
                <div className="tour-item" key={this.state.tour.id} title={this.state.tour.title} style={{ backgroundImage: "url('/images/" + this.state.tour.images[0] + "')" }}>
                    {TourSquare.GetModalityBadge(this.state.tour.modality)}
                    {TourSquare.GetTourType(this.state.tour.type)}
                    <div className="overlay"></div>
                    <h5 className="tour-title ellipsis">{this.state.tour.title}</h5>
                </div>
            </Link>
        );
    }
}