import React, { Component } from 'react';
import Panel from './Panel';
import LateralCard from './LateralCard';
import BrandHeader from './BrandHeader';
import Login from './Login';
import i18next from 'i18next';

import "./css/Home.css";

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div className="container-fluid main-container align-center">
            <div className="d-block d-lg-none">
                <BrandHeader dark={true} />
            </div>
            <div className="row">
                <Panel />
                <LateralCard />
            </div>      
      </div>
    );
  }
}
