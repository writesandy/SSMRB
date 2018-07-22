import React, { PureComponent } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer/Footer';
<<<<<<< HEAD
=======
// import About from './components/About'
// import ArtistProfiles from './pages/ArtistProfiles/ArtistProfiles';
import ArtistThumbnail from './components/ArtistThumbnail';
//import Community from './components/Community/Community'
// import ArtistLanding from './pages/ArtistLanding'
import GalleryComponent from './components/Gallery'
// import ImageUpload from './components/ImageUpload'
// import ImageUpload2 from './components/ImageUpload2'
import TestUploader from './components/TestUploader'

>>>>>>> 08b1b6020dfd8a7e89f45bbf939f42e4245cd1f1

// Pages
import Home from './pages/Home'
import ArtistLanding from './pages/ArtistLanding'
import GalleryComponent from './components/Gallery'

import About from './components/About'
import ArtistBio from './pages/ArtistProfiles/ArtistProfiles';

// require('dotenv').config()



class App extends PureComponent {
  render() {
    console.log(process.env)
    return (
      <Router>
        <div id="page">
          <HeaderNav />
          <div className="contentArea">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/Artist' component={ArtistLanding}/>
              <Route path='/Gallery' component={GalleryComponent}/>
              <Route path='/ArtistBio/:artistId' component={ArtistBio} />
              {/* Do not keep -- just for creating the page */}
              {/* <Route path='*' component={ArtistBio}/> */}
            </Switch>
          </div>
<<<<<<< HEAD
=======
          {/* <ImageUpload /> */}
          {/* <ImageUpload2 /> */}
          <TestUploader />

>>>>>>> 08b1b6020dfd8a7e89f45bbf939f42e4245cd1f1
          <Footer />
        </div>
      </Router>

    )
  }
}

export default App;
