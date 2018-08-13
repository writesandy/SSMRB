import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer/Footer';
import GalleryComponent from './components/Gallery'

// Pages
import Home from './pages/Home'
import ArtistLanding from './pages/ArtistLanding'
import ArtistBio from './pages/ArtistProfiles/ArtistProfiles';
// import LandingPage from './Landing';
import FirebaseSignUp from './components/FirebaseSignUp';
import FirebaseSignIn from './components/FirebaseSignIn';
import FirebasePasswordForgetPage from './components/FirebasePasswordForget';
import FirebaseAccount from './components/FirebaseAccount';
import FirebaseWithAuthentication from './components/FirebaseWithAuthentication';

import * as routes from './constants/routes';
class App extends PureComponent {
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
              {/* <Route exact path={routes.LANDING} component={() => <LandingPage />} /> */}
              <Route exact path={routes.SIGN_UP} component={() => <FirebaseSignUp />} />
              <Route exact path={routes.SIGN_IN} component={() => <FirebaseSignIn />} />
              <Route exact path={routes.PASSWORD_FORGET} component={() => <FirebasePasswordForgetPage />} />
              {/* <Route exact path={routes.HOME} component={() => <HomePage />} /> */}
              <Route exact path={routes.ACCOUNT} component={() => <FirebaseAccount />} />
            </Switch>
          <Footer />
        </div>
      </Router>

    )
  }
}

export default FirebaseWithAuthentication(App);
