import React, { PureComponent } from 'react';
import SignIn from './components/SignIn/signin.js';
//import Community from './components/Community/community.js'
import './App.css';
import Signin from './components/SignIn';
import SignUp from './components/SignUp'

//import ArtistThumbnail from './components/ArtistThumbnail/ArtistThumbnail';
//import ImageUpload from './components/ImageUpload'
//import GalleryComponent from './components/Gallery'



class App extends PureComponent {

  render() {
    return (
      <div className="App">
        {/* <Signin/> */}
        <SignUp/>
        {/* <ArtistThumbnail />
        <ImageUpload />
        <GalleryComponent /> */}
      </div>
    );
  }
}

export default App;
