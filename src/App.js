import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import avengers from './components/avengers';
import AvengersList from './components/AvengersList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: avengers
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Avengers: by Bryce Evans
        </p>
        <AvengersList avengers={this.state.avengers} />
        
        
      </div>
    );
  }
}

export default App;
