import React, { Component } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload'
import HeaderNav from './components/HeaderNav'
import Carousel from './components/Carousel/Carousel'
import Footer from './components/Footer/Footer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Carousel fluid={true}/>
        <ImageUpload />
        <Footer />
      </div>
    );
  }
}

export default App;
