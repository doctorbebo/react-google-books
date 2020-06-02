import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookInfo from "./componets/BookInfo";
import Search from "./componets/Search";
import "./App.css";

function App() {
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
