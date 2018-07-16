import React, { PureComponent } from 'react';
//import Community from './components/Community/community.js'
import './App.css';
//import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

import ArtistThumbnail from './components/ArtistThumbnail/ArtistThumbnail';
import ImageUpload from './components/ImageUpload'
import GalleryComponent from './components/Gallery'



class App extends PureComponent {

  render() {
    return (
      <div className="App">
        {/* <SignUp/> */}
        <SignIn/>
        <ArtistThumbnail />
        <ImageUpload />
        <GalleryComponent /> */}
      </div>
    );
  }
}

export default App;
