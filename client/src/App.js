import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./componets/Saved";
import Search from "./componets/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Route path="/" exact component={Search}/>
        <Route path="/Saved" exact component={Saved}/>
      </Router>
    </div>
  );
}


export default App;
