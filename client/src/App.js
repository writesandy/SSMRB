import React, { PureComponent } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router';
import {BrowserRouter, Link, Route } from 'react-router-dom';
// Constant Across All Pages
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer/Footer';

// Pages
import Home from './'




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
