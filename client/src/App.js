import React, { PureComponent } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer/Footer';
// import About from './components/About'
// import ArtistProfiles from './pages/ArtistProfiles/ArtistProfiles';
import ArtistThumbnail from './components/ArtistThumbnail';
//import Community from './components/Community/Community'
// import ArtistLanding from './pages/ArtistLanding'
import GalleryComponent from './components/Gallery'
// import ImageUpload from './components/ImageUpload'
// import ImageUpload2 from './components/ImageUpload2'
import TestUploader from './components/TestUploader'


// Pages
import Home from './pages/Home'

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div id="page">
          <HeaderNav />
          <div className="contentArea">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/Artist' component={ArtistThumbnail}/>
              <Route path='/Gallery' component={GalleryComponent}/>
              {/* <Route path='Community' component={Community}/> */}
            </Switch>
          </div>
          {/* <ImageUpload /> */}
          {/* <ImageUpload2 /> */}
          <TestUploader />

          <Footer />
        </div>
      </Router>

    )
  }
}

export default App;
