import React, { PureComponent } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home'
import ArtistLanding from './pages/ArtistLanding'
import GalleryComponent from './components/Gallery'

<<<<<<< HEAD
import About from './components/About'
import ArtistBio from './pages/ArtistProfiles/ArtistProfiles';
=======
// import About from './components/About'
import ArtistProfiles from './pages/ArtistProfiles/ArtistProfiles';
>>>>>>> 9d20412a13fbdd1d44ceebb3f4f87ac16bfdc13b




class App extends PureComponent {
  render() {
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
          <Footer />
        </div>
      </Router>

    )
  }
}

export default App;
