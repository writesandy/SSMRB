import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer/Footer';
import GalleryComponent from './components/Gallery'

import firebase from 'firebase/app';

// Pages
import Home from './pages/Home'
import ArtistLanding from './pages/ArtistLanding'
import ArtistBio from './pages/ArtistProfiles/ArtistProfiles';

class App extends PureComponent {
  componentWillMount() {
    var config = {
        apiKey: process.env.REACT_APP_APIKEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
      };
      firebase.initializeApp(config);
  }
  render() {
    
    return (
      <Router>
        <div id="page">
          <HeaderNav />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/Artist' component={ArtistLanding}/>
              <Route path='/Gallery' component={GalleryComponent}/>
              <Route path='/ArtistBio/:artistId' component={ArtistBio} />
              {/* Do not keep -- just for creating the page */}
              {/* <Route path='*' component={ArtistBio}/> */}
            </Switch>
          <Footer />
        </div>
      </Router>

    )
  }
}

export default App;
