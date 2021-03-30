import * as React from 'react';
import BrandHeader from './BrandHeader';
import Footer from './Footer';
import CardsCarousel from './CardsCarousel';
import './css/Post.css';


export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id, post: null };
    }

    render() {
        if (this.state.post == null) {
            this.loadPost();
            return (<div>Loading...</div>);
        }       

        let imageCarousel = Post.getImagesCarousel(this.state.post);

        return (
            <div className="page-container">
                <BrandHeader dark={true} />
                <div className="container">
                    <h1 className="title">{this.state.post.title}</h1>
                    <h5 className="subtitle">Da: {this.state.post.author}</h5>
                    
                    {imageCarousel}

                    <p className="content">{this.state.post.content}</p>
                    <p className="see-more">Leggi anche...</p>
                    <CardsCarousel filter={0} />                    
                </div>
                <Footer/>
            </div>
        );
    }

    static getImagesCarousel(post) {
        if (post == null || post.images == null) {
            return (<div></div>);
        }

        return (
          
                <div>
                <img className="post-picture" src={"/Images/" + post.images[0]} />
                    <p className="legend"></p>
                </div>

        );
    }

    async loadPost() {
        const response = await fetch('posts/' + this.state.id);
        const data = await response.json();
        this.setState({ post: data });
    }
}