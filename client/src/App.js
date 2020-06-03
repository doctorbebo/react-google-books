import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Saved from "./componets/Saved";
import Search from "./componets/Search";
import NavBar from "./componets/Navbar"
import WelcomeBanner from "./componets/WelcomeBanner"
import BookInfo from "./componets/BookInfo"
import "./App.css";

function App() {
  return (
   <Router>
        <NavBar/>
        <WelcomeBanner/>
        <Route path="/" exact component={Search}/>
        <Route path="/saved" exact component={Saved}/>
        <BookInfo/>
    </Router>
  );
}


export default App;
