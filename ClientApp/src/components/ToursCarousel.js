import * as React from 'react';
import Carousel from 'react-multi-carousel';
import { TourSquare } from './TourSquare';
import { useLocation } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import './css/ToursCarousel.css';
import { Link } from "react-router-dom";

export class ToursCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tours: [], loading: true, filter: props.filter };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(state => ({ tours: state.tours, loading: state.loading, filter: nextProps.filter }));
    }

    componentDidMount() {
        this.getToursData();
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ToursCarousel.renderToursCarousel(this.state.tours, this.state.filter);
        return (
            <div style={{ display: "grid", maxWidth: "100%" }}>
                {contents}
            </div>
        );
    }

    static renderToursCarousel(tours, filter) {
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 2,
                partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
            }            
        };

        if (filter > 0) {
            tours = tours.filter((post) => { return post.type == filter; });
        }

        return (
            <Carousel responsive={responsive}>
                {tours.map(tour =>
                    <TourSquare key={tour.id} tour={tour}/>
                )}
                <Link to={"/tourslist/"}>
                    <div className="tour-item see-more-tours"><span className="compass"></span><h5 className="tour-title ellipsis">{i18next.t("SeeAll")}</h5></div>
                </Link>
            </Carousel>
           );
    }

    async getToursData() {
        const response = await fetch('tours');
        const data = await response.json();
        this.setState({ tours: data, loading: false, filter: this.state.filter });
    }
}

export default withTranslation()(ToursCarousel)