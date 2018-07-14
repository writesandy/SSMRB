import React, { Component } from 'react';
import './App.css';
import HeaderNav from './components/HeaderNav'
import Carousel from './components/Carousel/Carousel'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Carousel fluid={true}/>
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
