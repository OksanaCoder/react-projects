import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <NavBar />
      <Route path='/main' component={Main}/>
      <Route path='/timer' component={Timer }/>
    </Router>

  );
}

export default App;
