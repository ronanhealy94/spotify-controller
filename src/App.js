import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
    color: '#fff',

};
let fakeServerData = {
  user: {
    name: 'David',
    playlists: [
      {
        name: 'My favs',
        songs: ['Beat It', 'Beat It', 'Beat It']
      },
      {
        name: 'My favs',
        songs: ['Beat It', 'Beat It', 'Beat It']
      },
      {
        name: 'My favs',
        songs: ['Beat It', 'Beat It', 'Beat It']
      }
    ]
  }
};

class Summary extends Component {
  render () {
    return (
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={defaultStyle}>{this.props.playlists && this.props.playlists.length} Text</h2>
      </div>
    );
  }
}

class Summary2 extends Component {
  render () {
    return (
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={defaultStyle}>{this.props.playlists && this.props.playlists.length} Text</h2>
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
        <ul><li>Song 1</li><li>Song 2</li><li>Song3</li></ul>
      </div>
    );
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {serverData: {}}
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({serverData: fakeServerData});
  }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s playlists
          </h1>

          <Summary playlists={this.state.serverData.user.name}/>
          <Summary2 playlists={this.state.serverData.user.name}/>
      
          <Filter/>

          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : 'Loading...'
        }
      </div>
    );
  }
}

export default App;
