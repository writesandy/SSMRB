import React, { Component } from 'react';
import './App.css';
import Signin from './components/SignIn'

import ArtistThumbnail from './components/ArtistThumbnail/ArtistThumbnail';
import ImageUpload from './components/ImageUpload'
import GalleryComponent from './components/Gallery'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Signin/>
        <ArtistThumbnail />
        <ImageUpload />
        <GalleryComponent />
      </div>
    );
  }
}

export default App;
