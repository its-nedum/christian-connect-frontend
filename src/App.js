import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Navbar from './components/layouts/navbar'
import './App.css';
import Home from './components/landing/home';
import AllMusic from './components/music/allMusic';
import SingleSongWithComments from './components/music/singleSongWithComments';
import AllVideos from './components/videos/allVideos'
import SingleVideoWithComments from './components/videos/singleVideoWithComments'
import AllLyrics from './components/lyrics/allLyrics';
import SingleLyricWithComments from './components/lyrics/singleLyricWithComments';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/music' component={AllMusic} />
        <Route path='/music/:songId' component={SingleSongWithComments} />
        <Route exact path='/videos' component={AllVideos} />
        <Route path='/videos/:videoId' component={SingleVideoWithComments} />
        <Route exact path="/lyrics" component={AllLyrics} />
        <Route path="/lyrics/:lyricsId" component={SingleLyricWithComments} />
-      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}
export default App;
