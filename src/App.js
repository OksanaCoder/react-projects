import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer';
import BookStore from "./components/BookStore";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  let books = [
    {name: 'Book1', price: 15},
    {name: 'Book2', price: 20},
    {name: 'Book3', price: 45},
    {name: 'Book4', price: 5}
  ]

  return (

    <Router>
      <NavBar />
      <Route path='/main' component={Main}/>
      <Route path='/timer' component={Timer }/>
      <Route path='/bookstore' render={() => <BookStore books={books}/>}/>
    </Router>

  );
}

export default App;
