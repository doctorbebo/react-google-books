import React from "react";
import ReactRouter, { Switch } from "react-router"
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookInfo from "./componets/BookInfo";
import Search from "./componets/Search";
import API from "./utils/API"
import logo from "./logo.svg";
import "./App.css";

function App() {

 API.getBook().then(res => console.log(res.data));


  return (
    <div className="App">
      
      <Router>
        <Route path="/" exact component={Search}/>
        <Route path="/Info" exact component={BookInfo}/>
      </Router>
    </div>
  );
}


export default App;
