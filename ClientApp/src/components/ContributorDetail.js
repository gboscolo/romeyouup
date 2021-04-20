import * as React from 'react';
import i18next from 'i18next';
import './css/Contributor.css';
import BrandHeader from './BrandHeader';
import { Container } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import SocialBox from './SocialBox';
import { LoadingAnimation } from './LoadingAnimation';

export class ContributorDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id, contributor: this.props.contributor};
    }

    render() {
        if (this.state.contributor == null) {
            this.loadContributor();
            return (<LoadingAnimation/>);
            }     

            return (
            <React.Fragment>
                <BrandHeader dark={true} />
                <div className='contributor-background'>
                    <Container >
                        <div className="contributor-container">
                            <div className="contributor-photo photo-big" style={{ backgroundImage: "url('/images/" + this.state.contributor.image + "')" }}></div>
                            <h1>{this.state.contributor.name}</h1>
                            <p className="description">{this.state.contributor.description}</p>
                        </div>
                        <SocialBox
                            instagram={this.state.contributor.instagram} 
                            youtube={this.state.contributor.youtube} 
                            facebook={this.state.contributor.facebook} 
                                telegram={this.state.contributor.telegram}
                                twitter={this.state.contributor.twitter} />
                    </Container>
                </div>
            </React.Fragment>
        );
    }

    async loadContributor() {
        const response = await fetch('contributors/' + this.state.id);
        const data = await response.json();
        this.setState(state => ({ contributor: data, mode: state.mode }));
    };
}

//export default withTranslation()(Contributor)