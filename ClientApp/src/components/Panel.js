import React, { Component } from 'react';
import BrandHeader from './BrandHeader';
import PanelMessage from './PanelMessage';
import './css/Panel.css';

export default class Panel extends Component {
    render() {
        return (
            <div className="panel col-lg-8 d-none d-lg-block d-xl-block">
                <BrandHeader />
                <PanelMessage/>
            </div>
        );
    }
}