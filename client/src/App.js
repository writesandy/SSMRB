import React, { PureComponent } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router';
import {BrowserRouter, Link, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Carousel from './components/Carousel/Carousel';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import SignIn from './components/SignIn';
import ArtistProfiles from './pages/ArtistProfiles';
import ArtistThumbnail from './components/ArtistThumbnail';
import ImageUpload from './components/ImageUpload';
import GalleryComponent from './components/Gallery';
import CarouselPage from './components/Carousel/Carousel';
import ArtistBio from './components/ArtistBio';
// import Community from './components/Community';


class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderNav />
          <Switch>
            <Route path='/' component={Carousel}/>
            <Route path='Artist' component={About}/>
            <Route path='Gallery' component={GalleryComponent}/>
            {/* <Route path='Community' component={Community}/> */}
          </Switch>
          <Footer />
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
