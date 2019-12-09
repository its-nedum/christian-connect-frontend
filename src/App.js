import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Navbar from './components/layouts/navbar'
import './App.css';
import Home from './components/landing/home';
import AllMusic from './components/music/allMusic';
import SingleSongWithComments from './components/music/singleSongWithComments';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/music' component={AllMusic} />
        <Route path='/music/:songId' component={SingleSongWithComments} />
-      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}
export default App;
