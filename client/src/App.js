import React, { PureComponent } from 'react';
import './App.css';
import Signin from './components/SignIn'
import ArtistProfiles from './pages/ArtistProfiles'
import ArtistThumbnail from './components/ArtistThumbnail';
import ImageUpload from './components/ImageUpload'
import GalleryPureComponent from './components/Gallery'
//import Community from './components/Community/community.js'

class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <ArtistProfiles />
        <Signin/>
        <ArtistThumbnail />
        <ImageUpload2 />
        <ImageUpload />
        <GalleryComponent />
      </div>
    );
  }
}

export default App;
