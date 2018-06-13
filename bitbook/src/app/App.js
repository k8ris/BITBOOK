import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
<<<<<<< HEAD
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FeedList from './feedPage/FeedLIst';
=======
import MainFeed from './feedPage/MainFeed';
>>>>>>> change make MainFeed and add FeedList into that
import ProfilePage from './profilePage/ProfilePage';
import PeoplePage from './peoplePage/PeoplePage';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>

<<<<<<< HEAD
<<<<<<< HEAD
          <Route exact path='/' component={FeedList} />
=======
>>>>>>> add button
          <Route path='/Feed' component={FeedList} />
=======
          <Route path='/Feed' component={MainFeed} />
>>>>>>> change make MainFeed and add FeedList into that
          <Route path='/People' component={PeoplePage} />
          <Route path='/Profile' component={ProfilePage} />
        </Switch>
        <Footer />
      </div >
    );
  }
}

export default App;