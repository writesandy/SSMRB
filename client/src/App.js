import React, { PureComponent } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router';
import {BrowserRouter, Link, Route } from 'react-router-dom';
// Constant Across All Pages
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home'
import ArtistLanding from './pages/ArtistLanding'
import GalleryComponent from './components/Gallery'




class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderNav />
          <Switch>
            <Route path='/' component={Home}/>
            <Route path='Artist' component={ArtistLanding}/>
            <Route path='Gallery' component={GalleryComponent}/>
            {/* <Route path='Community' component={Community}/> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
