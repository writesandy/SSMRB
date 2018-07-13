import React, { Component } from 'react';
import './App.css';

import ArtistProfiles from './pages/ArtistProfiles'
import ArtistThumbnail from './components/ArtistThumbnail';
import ImageUpload from './components/ImageUpload'
import GalleryComponent from './components/Gallery'

class App extends Component {

  render() {
    return (
      <div className="App">
          <ArtistProfiles />
         {/*<ArtistThumbnail />
        <ImageUpload /> 
        <GalleryComponent /> */}
      </div>
    );
  }
}

export default App;
