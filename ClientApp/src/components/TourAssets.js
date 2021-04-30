import * as React from 'react';
import BrandHeader from './BrandHeader';
import Footer from './Footer';
import { Container } from 'reactstrap';
import ContactForm from './ContactForm';
import { ImagesGallery } from './ImagesGallery';
import i18next from 'i18next';
import './css/Contacts.css';
import { LoadingAnimation } from './LoadingAnimation';
import { withTranslation } from 'react-i18next';
import ReactPlayer from "react-player";


export class TourAssets extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: props.match.params.id, tourAssets: null };
    }

    getImagesCarousel(images) {
        if (images && images.length > 0) {
            return (
                <ImagesGallery images={images.split("|")} />
            )
        }
    }
    getVideos(videos) {
        if (videos && videos.length > 0) {
            let parsed = videos.split("|"); 
            if (parsed.length > 0) {
                return (
                    parsed.map((video) =>
                        <div className="video-item">
                              <ReactPlayer
                                url={"https://www.youtube.com/watch?v=" + video}
                              />
                        </div>                        
                    ));
            }
        }
    }

    render() {
        if (this.state.tourAssets == null) {
            this.loadTourAssets();
            return (<LoadingAnimation />);
        }

        return (
            <div className="page-container">
                <BrandHeader dark={true} />
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-12">
                            <h1 className="title"><span className="text-secondary">Risorse per </span>{this.state.tourAssets.tour.title}</h1>
                        </div>
                        <div className="col-md-12">
                            {this.getImagesCarousel(this.state.tourAssets.images) }
                        </div>
                        <div className="col-md-12 video-container">
                            { this.getVideos(this.state.tourAssets.videos) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    async loadTourAssets() {
        const response = await fetch('tourassets/' + this.state.id);
        const data = await response.json();
        this.setState({ tourAssets: data });
    }
}

export default withTranslation()(TourAssets);