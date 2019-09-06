import React from 'react';
import './App.css';
import SelfPaste from './components/SelfPaste';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/:id?" component={SelfPaste} />
    </Router>
  );
}

export default App;
