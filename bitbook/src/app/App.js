import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FeedList from './feedPage/FeedLIst';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FeedList />
        <Switch>

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
