import React, { Component } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload'
import Gallery from './components/Gallery'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ImageUpload />
        <Gallery />
      </div>
    );
  }
}

export default App;
