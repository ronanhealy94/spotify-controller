import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff';
let defaultStyle = {
    color: '#fff',

};

class Summary extends Component {
  render () {
    return (
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: defaultTextColor}}>Number Text</h2>
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
      <h1>Title</h1>
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
