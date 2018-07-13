import React, { Component } from 'react';
import Home from './components/Home/Home.js';
import Community from './components/Community/community.js'
import './App.css';

//import ArtistThumbnail from './components/ArtistThumbnail/ArtistThumbnail';
//import ImageUpload from './components/ImageUpload'
//import GalleryComponent from './components/Gallery'


class App extends Component {

  render() {
    return (
      <div className="App">
 
        <header className="App-header">
        <Home></Home>
        <Community />

        {/* <ArtistThumbnail></ArtistThumbnail>
        <ImageUpload></ImageUpload> */}
        {/* GalleryComponent></GalleryComponent> */}
     </header>
      </div>
    );
  }
}

export default App;
