import React, { Component } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload'
import GalleryComponent from './components/Gallery'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ImageUpload />
        <GalleryComponent />
      </div>
    );
  }
}

export default App;
