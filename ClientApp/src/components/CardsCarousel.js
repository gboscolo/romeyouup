import * as React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './css/CardsCarousel.css';
import { Link } from "react-router-dom";
import Contributor from './Contributor';
import { LoadingAnimation } from './LoadingAnimation';

export default class CardsCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [], loading: true, filter: props.filter };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(state => ({ posts: state.posts, loading: state.loading, filter: nextProps.filter }));
    }

    componentDidMount() {
        this.getPostsData();
    }

    render() {
        let contents = this.state.loading
            ? <LoadingAnimation/>
            : CardsCarousel.renderPostsCarousel(this.state.posts, this.state.filter);
        return (
            <div style={{ display: "grid", maxWidth: "100%" }}>
                {contents}
            </div>
        );
    }

    static renderPostsCarousel(posts, filter) {
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
            posts = posts.filter((post) => { return post.type == filter; });
        }

        return (
            <Carousel responsive={responsive} partialVisible={true}>
                {posts.map(post =>
                    <Link to={"/post/" + post.id} key={post.id}>
                    <div className="post-item" key={post.id} title={post.title + " " + post.content} style={{ backgroundImage: "url('/images/" + post.images[0] + "')" }}>
                        <div className="overlay"></div>
                        <h5 className="post-title ellipsis">{post.title}</h5>
                            <Contributor id={post.author} mode={1}/>
                        </div>
                    </Link>
                )}
            </Carousel>
           );
    }

    async getPostsData() {
        const response = await fetch('posts');
        const data = await response.json();
        this.setState({ posts: data, loading: false, filter: this.state.filter });
    }
}