import React, { Component } from 'react';
import './App.css';

import ArtistThumbnail from './components/ArtistThumbnail/ArtistThumbnail';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ArtistThumbnail />
      </div>
    );
  }
}

export default App;
