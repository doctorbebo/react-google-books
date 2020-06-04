import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="nav-bar">
            <h3 className="nav-item padding">Book Detective</h3>
            <Link className="nav-item left-border padding link" to="/">Search</Link>
            <Link className="nav-item left-border padding link" to="/saved">Saved</Link>
        </div>
    );
  }
  
  
  export default NavBar;