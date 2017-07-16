import React, { Component } from 'react';
import './App.css';
import Sketch from './components/Sketch'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Sketch/>
        </p>
      </div>
    );
  }
}

export default Home;
