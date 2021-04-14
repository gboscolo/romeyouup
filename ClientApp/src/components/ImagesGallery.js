import React from 'react';
import ImageGallery from 'react-image-gallery';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { withTranslation } from 'react-i18next';

export class ImagesGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: props.images }
    }
    render() {
        let media = this.state.images.map(i => {
            return { source: "/Images/" + i }
        });

        return (<AwesomeSlider media={media} />);
    }
}

export default withTranslation()(ImagesGallery)