import React, { Component } from 'react';
//import logo from './logo.svg';
import Home from './components/Home/Home.js';
import Community from './components/Community/community.js'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Home></Home>
        <Community></Community>
      </div>
    );
  }
}

export default App;
