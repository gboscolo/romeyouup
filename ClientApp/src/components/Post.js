import * as React from 'react';
import BrandHeader from './BrandHeader';
import Footer from './Footer';
import CardsCarousel from './CardsCarousel';
import Contributor from './Contributor';
import i18next from 'i18next';
import { ImagesGallery } from './ImagesGallery';
import { withTranslation } from 'react-i18next';
import './css/Post.css';
import { LoadingAnimation } from './LoadingAnimation';


export class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id, post: null };
    }

    componentWillReceiveProps(nextprops) {
        this.setState({ id: nextprops.match.params.id, post: null });
    }

    render() {
        if (this.state.post == null) {
            this.loadPost();
            return (<LoadingAnimation/>);
        }       

        let imageCarousel = Post.getImagesCarousel(this.state.post);

        return (
            <div className="page-container">
                <BrandHeader dark={true} />
                <div className="container">
                    <h1 className="title">{this.state.post.title}</h1>
                    <Contributor id={this.state.post.author} mode={0}/>
                    
                    {imageCarousel}

                    <p className="content">{this.state.post.content}</p>
                    <p className="see-more">{i18next.t("AlsoRead")}...</p>
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
            <ImagesGallery images={post.images} />
        );
    }

    async loadPost() {
        debugger;
        const response = await fetch('posts/' + this.state.id);
        const data = await response.json();
        this.setState({ post: data });
    }
}

export default withTranslation()(Post)