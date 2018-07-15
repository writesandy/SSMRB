import React, { PureComponent } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Constant Across All Pages
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home'
import ArtistLanding from './pages/ArtistLanding'
import GalleryComponent from './components/Gallery'

import About from './components/About'




class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <HeaderNav />
          <Switch>
            <Route exact path='/' component={About}/>
            <Route path='/Artist' component={ArtistLanding}/>
            <Route path='/Gallery' component={GalleryComponent}/>
            {/* <Route path='Community' component={Community}/> */}
          </Switch>
          <Footer />
        </div>
      </Router>

    )
  }
}

export default App;
