import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component Imports
import AppNavbar from './components/layout/AppNavbar'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <h1>content here</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
