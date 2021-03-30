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
            : CardsCarousel.renderToursCarousel(this.state.tours, this.state.filter);
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
                {tours.map(post =>
                    <Link to={"/post/" + post.id} key={post.id}>
                        <div className="tour-item" key={post.id} title={post.title + " " + post.content} style={{ backgroundImage: "url('/images/" + post.images[0] + "')" }}>
                        <div className="overlay"></div>
                        <h5 className="tour-title ellipsis">{post.title}</h5>
                        </div>
                    </Link>
                )}
            </Carousel>
           );
    }

    async getToursData() {
        const response = await fetch('tours');
        const data = await response.json();
        this.setState({ tours: data, loading: false, filter: this.state.filter });
    }
}