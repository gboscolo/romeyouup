import React, { Component } from 'react';
import Panel from './Panel';
import LateralCard from './LateralCard';

import "./css/Home.css";

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="main-container align-center">
            <Panel />
            <LateralCard />
      </div>
    );
  }
}
