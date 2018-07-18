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

import About from './components/About'
import ArtistProfiles from './pages/ArtistProfiles/ArtistProfiles';




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

              {/* Do not keep -- just for creating the page */}
              <Route path='/ArtistProfiles' component={ArtistProfiles}/>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>

    )
  }
}

export default App;
