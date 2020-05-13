import React from 'react';

import './App.css';
// import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <Router>
	  <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
