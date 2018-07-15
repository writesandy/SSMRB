import React, { PureComponent } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router'
import {BrowserRouter, Link, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav'
import Carousel from './components/Carousel/Carousel'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import SignIn from './components/SignIn'
import ArtistProfiles from './pages/ArtistProfiles'
import ArtistThumbnail from './components/ArtistThumbnail';
import ImageUpload from './components/ImageUpload'
import GalleryComponent from './components/Gallery'
import CarouselPage from './components/Carousel/Carousel';
// import Community from './components/Community/community.js'


class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderNav />
          <Footer />
          <Switch>
            <Route path='Home' component={About}/>
            <Route path='Gallery' component={CarouselPage}/>
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}




// class App extends PureComponent {

//   render() {
//     return (
//       <div className="App">
//         <HeaderNav />
//         <Carousel fluid={true}/>
//         <About />
//         <Footer />
//         <ArtistProfiles />
//         <SignIn/>
//         <ArtistThumbnail />
//         <ImageUpload />
//         <GalleryComponent />
//       </div>
//     );
//   }
// }

export default App;
