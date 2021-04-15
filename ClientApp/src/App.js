import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Post } from './components/Post';
import { Tour } from './components/Tour';
import NewOrEditTour from './components/administration/NewOrEditTour';
import NewOrEditPost from './components/administration/NewOrEditPost';

import ManageTours from './components/administration/ManageTours';

import ManagePosts from './components/administration/ManagePosts';

import { ToursList } from './components/ToursList';
import { Administration } from './components/Administration';
import { WhoWeAre } from './components/WhoWeAre';
import { Contacts } from './components/Contacts';
import { OurProposals } from './components/OurProposals';
import { ContributorDetail } from './components/ContributorDetail';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/post/:id' component={Post} />
            <Route path='/tour/:id' component={Tour} />
            <Route path='/tourslist' component={ToursList} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/whoweare' component={WhoWeAre} />
            <Route path='/ourproposals' component={ToursList} />
            <Route path='/contributordetail/:id' component={ContributorDetail} />
            <AuthorizeRoute exact path='/Administration' component={Administration} />
            <AuthorizeRoute path='/Administration/ManagePosts' component={ManagePosts} />
            <AuthorizeRoute path='/Administration/ManageTours' component={ManageTours} />
            <AuthorizeRoute path='/Administration/NewOrEditPost/:id' component={NewOrEditPost} />
            <AuthorizeRoute path='/Administration/NewOrEditTour/:id' component={NewOrEditTour} />
            <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
