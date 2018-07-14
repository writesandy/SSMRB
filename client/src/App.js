import React, { PureComponent } from 'react';
import './App.css';
import HeaderNav from './components/HeaderNav'
import Carousel from './components/Carousel/Carousel'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
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
        <HeaderNav />
        <Carousel fluid={true}/>
        <About />
        <Footer />
        {/* <ArtistProfiles /> */}
        {/* <Signin/>
        <ArtistThumbnail />
        <ImageUpload />
        <GalleryComponent /> */}
      </div>
    );
  }
}

export default App;
