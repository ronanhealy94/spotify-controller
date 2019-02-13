import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
    color: '#fff',

};

class Summary extends Component {
  render () {
    return (
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={defaultStyle}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render () {
    return (
      <div>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render () {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: '25%'}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song31</li></ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={{...defaultStyle, 'font-size': '54px'}}>Title</h1>
      <Summary/>
      <Summary/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
    );
  }
}

export default App;
