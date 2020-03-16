import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import Word from './views/Word';
import WordColor from './views/WordColor';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Word path="/:word"/>
        <WordColor path="/:word/:textcolor/:backgroundcolor"/>
      </Router>
    </div>
  );
}

export default App;
