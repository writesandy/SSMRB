import React, { Component } from 'react';
import SignIn from './components/SignIn';

import './App.css';


//import ArtistThumbnail from './components/ArtistThumbnail/ArtistThumbnail';
//import ImageUpload from './components/ImageUpload'
//import GalleryComponent from './components/Gallery'


class App extends Component {

  render() {
    return (
      <div className="App">
 
        <header className="App__header--top">
        <SignIn/>
       

        {/* <ArtistThumbnail></ArtistThumbnail>
        <ImageUpload></ImageUpload> */}
        {/* GalleryComponent></GalleryComponent> */}
     </header>
      </div>
    );
  }
}

export default App;
