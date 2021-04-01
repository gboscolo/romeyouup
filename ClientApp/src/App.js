import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Post } from './components/Post';
import { Tour } from './components/Tour';
import { ToursList } from './components/ToursList';
import { Administration } from './components/Administration';
import { WhoWeAre } from './components/WhoWeAre';
import { Contacts } from './components/Contacts';
import { OurProposals } from './components/OurProposals';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/administration' component={Administration} />
            <Route path='/post/:id' component={Post} />
            <Route path='/tour/:id' component={Tour} />
            <Route path='/tourslist' component={ToursList} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/whoweare' component={WhoWeAre} />
            <Route path='/ourproposals' component={ToursList} />
      </Layout>
    );
  }
}
