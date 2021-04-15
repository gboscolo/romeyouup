import * as React from 'react';
import BrandHeader from './BrandHeader';
import i18next from 'i18next';
import './css/SocialBox.css';

export default class SocialBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { facebook: this.props.facebook, instagram: this.props.instagram, youtube: this.props.youtube};
    }

    getFacebookBadge() {
        if (this.state.facebook) {
            return (<a className="social-button facebook" href={"https://www.facebook.com/" + this.state.facebook} target="_blank"></a>);
        }
    }
    getInstagramBadge() {
        if (this.state.instagram) {
            return (<a className="social-button instagram" href={"https://www.instagram.com/" + this.state.instagram} target="_blank"></a>);
        }
    }
    getYoutubeBadge() {
        if (this.state.youtube) {
            return (<a className="social-button youtube" href={"https://www.youtube.com/" + this.state.youtube} target="_blank"></a>);
        }
    }

    render() {
        return (
            <div className="social-box">
                {this.getFacebookBadge()}
                {this.getInstagramBadge()}
                {this.getYoutubeBadge()}
            </div>
            );
    }
}