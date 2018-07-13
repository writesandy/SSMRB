import React, { Component } from 'react';
import './App.css';

import ArtistThumbnail from './components/ArtistThumbnail/ArtistThumbnail';
import ImageUpload2 from './components/ImageUpload2'
import GalleryComponent from './components/Gallery'

class App extends Component {

  render() {
    return (
      <div className="App">
        <ArtistThumbnail />
        <ImageUpload2 />
        <GalleryComponent />
      </div>
    );
  }
}

export default App;
