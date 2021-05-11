import * as React from 'react';
import BrandHeader from './BrandHeader';
import Footer from './Footer';
import { ToursCarousel } from './ToursCarousel';
import { ContactForm } from './ContactForm';
import { ImagesGallery } from './ImagesGallery';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'reactstrap';
import './css/Tour.css';
import { LoadingAnimation } from './LoadingAnimation';
import Map from "./Map";
import ToursDatesList from "./ToursDatesList";

export class Tour extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id, tour: null };
    }

    componentWillReceiveProps(nextprops) {
        this.setState({ id: nextprops.match.params.id, tour: null });
    }

    getWillSee() {
        if (!this.state.tour.willSee) { return (<div />) }
        else {
            return (<div><div className="highlight-title">{i18next.t("WhatWeWillSee")}:</div> <div className="description">{this.state.tour.willSee}</div></div>);
        }
    }

    render() {
        if (this.state.tour == null) {
            this.loadTour();
            return (<LoadingAnimation />);
        }

        let imageCarousel = Tour.getImagesCarousel(this.state.tour);
        let tourdates = [ ...(this.state.tourdates || []) ];
        //show only future dates
        tourdates = tourdates.filter((date) => {
            return new Date(date.date) > new Date()
        });

        return (
            <div className="page-container">
                <BrandHeader dark={true} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <h1 className="title">{this.state.tour.title}</h1>
                            <h4 className="subtitle">"{this.state.tour.caption}"</h4>
                            <div className="highlight-section">
                                <div className="hightlight-square">
                                    <div className="highlight-text">{this.state.tour.duration}h</div>
                                    <div className="highlight-title">{i18next.t("Duration")}</div>
                                </div>
                                <div className="hightlight-square">
                                    <div className="highlight-text">{Tour.GetModalityString(this.state.tour.modality)}</div>
                                    <div className="highlight-title">{i18next.t("Modality")}</div> </div>
                                <div className="hightlight-square">
                                    <div className="highlight-text">{this.state.tour.cost}€</div>
                                    <div className="highlight-title">{i18next.t("Cost")}*</div> </div>
                                <div className="hightlight-square">
                                    <div className="highlight-text">{Tour.GetTourType(this.state.tour.modality)}</div>
                                    <div className="highlight-title">{i18next.t("Type")}</div>
                                </div>
                            </div>

                            <AnchorLink href='#book' id="anchor-book">{i18next.t("Book")}!</AnchorLink>
                            {imageCarousel}

                            {/*   {this.getWillSee()}*/}
                       
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="highlight-title">{i18next.t("NextDates")}</div>
                            {this.getDatesList(tourdates) }
                            
                            <div className="highlight-title">{i18next.t("Shortly")}</div>
                            <div className="highlights"
                                dangerouslySetInnerHTML={{
                                    __html: this.state.tour.summary
                                }}></div>
                            <div className="highlight-title">{i18next.t("Description")}</div>
                            <div className="description">{this.state.tour.description}</div>
                            <div className="additional-info">
                                <span className="highlight-title">{i18next.t("AdditionalInfo")}: </span>
                                <span>{this.state.tour.additionalInfo}</span>
                            </div>
                        </div>
                        {Tour.GetMap(this.state.tour.positions)}
                        <div className="col md-12 general-info">
                            <p className="highlight-title">{i18next.t("GeneralInfo")}</p>
                            <div>
                                <span className="tour-icon icon-calendar" /><span>{i18next.t("DateGeneralInfo")}</span>
                            </div>
                            <div>
                                <span className="tour-icon icon-health" /><span>{i18next.t("HealthGeneralInfo")}</span>
                            </div>
                            <div>
                                <span className="tour-icon icon-leaf" /><span>{i18next.t("EcoGeneralInfo")}</span>
                            </div>
                            <div>
                                <span className="tour-icon icon-info" /><span>{i18next.t("InfoGeneralInfo")}</span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="highlight-more-info text-secondary"><small>*{i18next.t("CostGroupHint")}</small></div>
                        </div>
                        <div className="col-md-12">
                            <div className=" contact-form">
                                <div className="">
                                    <h3 id="book">{i18next.t("TourRequestInfo")}</h3>
                                    <ContactForm textareaMessage={i18next.t("YourMessage")} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <p className="see-more">{i18next.t("AlsoLook")}...</p>
                            <ToursCarousel filter={0} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    static GetMap(positions) {
        if (positions) {
            try {
                let positionsArray = positions.indexOf("|") > -1 ? positions.split("|") : [positions];
                return (<div className="col-md-12">
                    <Map positions={ positionsArray } />
                </div>);
            }
            catch (e) {}
        }
    }

    static GetModalityString(modality) {
        switch (modality) {
            case 1:
                return (<span title={i18next.t("WalkTour")} className="modality modality-walk"></span>);
            case 2:
                return (<span title={i18next.t("BikeTour")} className="modality modality-bike"></span>);
        }
    }
    static GetTourType(type) {
        switch (type) {
            case 1:
                return (<span title={i18next.t("Experiences")} className="type type-experience"></span>);
            case 2:
                return (<span title={i18next.t("Walkingtours")} className="type type-walking"></span>);
            case 3:
                return (<span title={i18next.t("Museums")} className="type type-museums"></span>);
        }
    }

    static getImagesCarousel(tour) {
        if (tour == null || tour.images == null) {
            return (<div></div>);
        }

        return (
            <ImagesGallery images={tour.images} />
        );
    }

    getDatesList(tourdates) {
        if (tourdates == null || tourdates.length == 0) {
            return (
                <div className="text-secondary">{i18next.t("NotScheduledTourMessage")}</div>
            );
        }
        else {
            return (
                <ul>
                    {
                        tourdates.map(tourdate => (
                            <li>{new Date(tourdate.date).toLocaleDateString()} {i18next.t("AtHours")} {new Date(tourdate.date).getHours()}:00</li>
                        ))}
                </ul>
            );
        }
    }

    async loadTour() {
        const response = await fetch('tours/' + this.state.id);
        const data = await response.json();

        const responsedates = await fetch('tourdates/' + this.state.id);
        const datas = await responsedates.json();
        this.setState({ tour: data, tourdates: datas});
    }
}

export default withTranslation()(Tour)