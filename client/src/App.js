import React, { PureComponent } from 'react';
//import Community from './components/Community/community.js'
import './App.css';
//import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

import ArtistThumbnail from './components/ArtistThumbnail/ArtistThumbnail';
import ImageUpload from './components/ImageUpload'
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
