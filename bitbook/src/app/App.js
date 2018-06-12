import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';


class App extends Component {
  render() {
    return (
      <div>
         <Header />
        <Switch>

        </Switch>
        <Footer />  
      </div>
    );
  }
}

export default App;
