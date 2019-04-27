import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venue_info';
import Highlight from './components/highlights';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <Featured />
        <VenueInfo />
        <Highlight />
      </div>
    );
  }
}

export default App;
