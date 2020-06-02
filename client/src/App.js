import React from "react";
import ReactRouter, { Switch } from "react-router"
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookInfo from "./BookInfo";
import Search from "./Search";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      hello
      
      <Router>
        <Route path="/" exact component={Search}/>
        <Route path="/Info" exact component={BookInfo}/>
      </Router>
    </div>
  );
}


export default App;
