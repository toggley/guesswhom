import React from "react";

import ReactDOM from "react-dom";

import { findRenderedComponentWithType } from 'react-dom/test-utils';
import Dashboard from "./components/Dashboard";
import About  from "./components/About"
import Wordle from './components/Wordle';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Home() {
  return(
    <div>This is the home page</div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <div >
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/wordle">Wordle</Link>
              </li>
            </ul>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/dashboard' element={<Dashboard />}></Route>
        <Route exact path='/wordle' element={<Wordle />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
