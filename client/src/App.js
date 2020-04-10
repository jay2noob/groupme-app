import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">

      </div>
    </Router>
  );
}

export default App;
