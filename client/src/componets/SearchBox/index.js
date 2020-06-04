import React from "react";

function SearchBox() 
{
  return (
    <div className="wrapper search-form">
        <h3>Search for a Book</h3>
        <div className="input-field">
            <div className="">
                <input placeholder="title, authors ect..."></input>
            </div>
            <div className="button">
                <button type="submit">Search</button>
            </div>
        </div>
    </div>
  )  
}
  export default SearchBox;