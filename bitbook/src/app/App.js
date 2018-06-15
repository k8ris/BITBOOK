import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FeedPage from './feedPage/FeedPage';
import ProfilePage from './profilePage/ProfilePage';
import PeoplePage from './peoplePage/PeoplePage';
import PostPage from './postPage/PostPage'


class App extends Component { 
  render() {
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path='/' component={FeedPage} />
          <Route path='/Feed' component={FeedPage} />
          <Route path='/People' component={PeoplePage} />
          <Route path='/:type/:id' component={PostPage} />
          <Route path='/Profile' component={ProfilePage} />
        </Switch>
      <Footer />
      </div >
    );
  }
}

export default App;