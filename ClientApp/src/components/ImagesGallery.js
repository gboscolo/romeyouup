import React from 'react';
import { withTranslation } from 'react-i18next';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export class ImagesGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: props.images }
    }
    render() {
        return (
            <Carousel
                autoPlay={true}
                dynamicHeight={true}
                emulateTouch={true}
                swipeable={true}
                infiniteLoop={true}
                showIndicators={false}
            >
                {
                    this.state.images.map(i => 
                        <div>
                            <img src={"/Images/" + i} />
                        </div>
                    )
                }
            </Carousel>

            );
    }
}

export default withTranslation()(ImagesGallery)