import * as React from 'react';
import i18next from 'i18next';
import { NavItem, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import BrandHeader from '../BrandHeader';
import { LoadingAnimation } from '../LoadingAnimation';

export default class ManagePosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: null, loading: true };
    }

    deletePost = function (id) {
        const url = 'posts/DeletePost/' + id;

        const options = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
            .then((res) => console.log(res.json(), "res"))
            .then((data) => console.log(data, "data"))
            .catch((err) => console.log(err, "err"));


    }

    render() {
        if (this.state.loading) {
            this.loadPosts();
            return (<LoadingAnimation />);
        }

        return (<div className="main-container align-center">
            <BrandHeader dark={true} />
            <Container>
                <h3>Gestisci post</h3>
                {this.state.posts.map(post =>
                    <Row key={post.id}>
                        <Col>{post.title}</Col>
                        <Col>{post.content}</Col>
                        <Col><Link to={"/administration/neworeditpost/" + post.id}>Modifica</Link></Col>
                        <Col><Link to="#" onClick={() => { this.deletePost(post.id) }}>Elimina</Link></Col>
                    </Row>
                )}                
            </Container>
        </div>);
    }

    async loadPosts() {
        const response = await fetch('posts');
        const data = await response.json();
        this.setState({ posts: data, loading: false });
    }
}