import React, { Component } from 'react';
import SignIn from './components/SignIn/signin.js';
//import Community from './components/Community/community.js'
import './App.css';
import Signin from './components/SignIn'

//import ArtistThumbnail from './components/ArtistThumbnail/ArtistThumbnail';
//import ImageUpload from './components/ImageUpload'
//import GalleryComponent from './components/Gallery'

import ArtistThumbnail from './components/ArtistThumbnail/ArtistThumbnail';
import ImageUpload2 from './components/ImageUpload2'
import GalleryComponent from './components/Gallery'
import ImageUpload from './components/ImageUpload/ImageUpload';

class App extends Component {

  render() {
    return (
      <div className="App">
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
