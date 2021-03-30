import * as React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './css/ToursCarousel.css';
import { Link } from "react-router-dom";

export default class ToursCarousel extends React.Component {
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
                items: 3,
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
            <Carousel responsive={responsive} partialVisible={true}>
                {tours.map(tour =>
                    <Link to={"/tour/" + tour.id} key={tour.id}>
                        <div className="tour-item" key={tour.id} title={tour.title + " " + tour.content} style={{ backgroundImage: "url('/images/" + tour.images[0] + "')" }}>
                        {ToursCarousel.GetModalityBadge(tour.modality)}
                        <div className="overlay"></div>
                        <h5 className="tour-title ellipsis">{tour.title}</h5>
                        </div>
                    </Link>
                )}
            </Carousel>
           );
    }

    static GetModalityBadge(modality) {
        switch (modality) {
            case 1:
                return (<span className="modality modality-walk"></span>);
            case 2:
                return (<span className="modality modality-bike"></span>);
        }
    }

    async getToursData() {
        const response = await fetch('tours');
        const data = await response.json();
        this.setState({ tours: data, loading: false, filter: this.state.filter });
    }
}