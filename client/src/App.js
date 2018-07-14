import React, { PureComponent } from 'react';
import './App.css';

import ArtistProfiles from './pages/ArtistProfiles'
import ArtistThumbnail from './components/ArtistThumbnail';
import ImageUpload from './components/ImageUpload'
import GalleryPureComponent from './components/Gallery'

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <ArtistProfiles />
        {/*<ArtistThumbnail />
        <ImageUpload /> 
        <GalleryPureComponent /> */}
      </div>
    );
  }
}

export default App;
