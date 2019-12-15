import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "../public";
import logo from './logo.svg';
import './App.css';

function App() {
  document.title = "Clicky App"
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Index} />
        <Route path="*" component={ErrorPage} />
      </Router>
    </div>
  );
}

export default App;
