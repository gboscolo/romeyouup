import React, { Component, Fragment } from 'react';
import Panel from './Panel';
import LateralCard from './LateralCard';
import BrandHeader from './BrandHeader';
import i18next from 'i18next';

import "./css/Home.css";

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <Fragment>
              <div className="d-block d-lg-none home-logo">
                  <BrandHeader dark={true} />
              </div>
            <div className="container-fluid main-container align-center">
            
            <div className="row">
                <Panel />
                <LateralCard />
                  </div>
              </div>
            </Fragment>
    );
  }
}
