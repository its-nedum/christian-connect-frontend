import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Navbar from './components/layouts/navbar'
import './App.css';
import Home from './components/landing/home';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
-      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}
export default App;
