﻿import * as React from 'react';
import BrandHeader from './BrandHeader';
import Footer from './Footer';
import ToursCarousel from './ToursCarousel';
import './css/Tour.css';


export class Tour extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id, tour: null };
    }

    render() {
        if (this.state.tour == null) {
            this.loadTour();
            return (<div>Loading...</div>);
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
                        {imageCarousel}
                        <div className="highlight-section">
                            <div><span className="highlight-title">Durata:</span>{this.state.tour.duration} ore</div>
                            <div><span className="highlight-title">Modalità:</span> {Tour.GetModalityString(this.state.tour.modality)}</div>
                            <div><span className="highlight-title">Costo:</span> {this.state.tour.cost}€ a persona</div>
                            </div>
                            <div><div className="highlight-title">Cosa vedremo:</div> <div className="description">{this.state.tour.willSee}</div></div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                            <div className="highlight-title">In breve</div>
                            <div className="highlights"
                                dangerouslySetInnerHTML={{
                                    __html: this.state.tour.summary
                                }}></div>
                            <div className="highlight-title">Descrizione</div>
                            <div className="description">{this.state.tour.description}</div>
                            <div className="additional-info">
                                <span className="highlight-title">Informazioni aggiuntive: </span>
                                <span>{this.state.tour.additionalInfo}</span>
                            </div>
                        </div>
                        <div className="col">
                            <p className="see-more">Vedi anche...</p>
                            <ToursCarousel filter={0} />
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
                return "Tour a piedi";
                break;
            case 2:
                return "Tour in bici";
                break;
        }
    }
    static getImagesCarousel(tour) {
        if (tour == null || tour.images == null) {
            return (<div></div>);
        }

        return (
          
                <div>
                <img className="tour-picture" src={"/Images/" + tour.images[0]} />
                    <p className="legend"></p>
                </div>

        );
    }

    async loadTour() {
        const response = await fetch('tours/' + this.state.id);
        const data = await response.json();
        this.setState({ tour: data });
    }
}