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
            return (<LoadingAnimation/>);
            }       

            let imageCarousel = Tour.getImagesCarousel(this.state.tour);

            return (
            <div className="page-container">
                <BrandHeader dark={true} />
                <div className="container">
                    <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <h1 className="title">{this.state.tour.title}</h1>
                            <h4 className="subtitle">"{this.state.tour.caption}"</h4>
                            <AnchorLink href='#book' id="anchor-book">Prenota!</AnchorLink>
                        {imageCarousel}
                            <div className="highlight-section">
                                <div><span className="highlight-title">{i18next.t("Duration")}:</span>{this.state.tour.duration} {i18next.t("Hours")}</div>
                                <div><span className="highlight-title">{i18next.t("Modality")}:</span> {Tour.GetModalityString(this.state.tour.modality)}</div>
                                <div><span className="highlight-title">{i18next.t("Cost")}:</span> {this.state.tour.cost}€{i18next.t("ForPerson")}*</div>
                                <div><small>*{i18next.t("CostGroupHint")}</small></div>
                            </div>
                            {this.getWillSee()}
                    </div>
                    <div className="col-xl-6 col-md-12">
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
                        <div className="col">
                            <p className="see-more">{i18next.t("AlsoLook")}...</p>
                            <ToursCarousel filter={0} />
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <h3 id="book">{i18next.t("TourRequestInfo")}</h3>
                            <ContactForm textareaMessage={i18next.t("YourMessage")} />
                    </div>
                    </div>
                    </div>
            <Footer/>
            </div>
        );
    }
    static GetModalityString(modality) {
        switch (modality) {
            case 1:
                return i18next.t("WalkTour");
                break;
            case 2:
                return i18next.t("BikeTour");
                break;
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

    async loadTour() {
        const response = await fetch('tours/' + this.state.id);
        const data = await response.json();
        this.setState({ tour: data });
    }
}

export default withTranslation()(Tour)