import * as React from 'react';
import BrandHeader from './BrandHeader';
import i18next from 'i18next';
import './css/SocialBox.css';

export default class SocialBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { facebook: this.props.facebook, instagram: this.props.instagram, youtube: this.props.youtube, twitter: this.props.twitter, telegram: this.props.telegram};
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
    getTelegramBadge() {
        if (this.state.telegram) {
            return (<a className="social-button telegram" href={"https://telegram.me/" + this.state.telegram} target="_blank"></a>);
        }
    }
    getTwitterBadge() {
        if (this.state.twitter) {
            return (<a className="social-button twitter" href={"https://twitter.com/" + this.state.twitter} target="_blank"></a>);
        }
    }
    render() {
        return (
            <div className="social-box">
                {this.getFacebookBadge()}
                {this.getInstagramBadge()}
                {this.getYoutubeBadge()}
                {this.getTwitterBadge()}
                {this.getTelegramBadge()}
            </div>
            );
    }
}