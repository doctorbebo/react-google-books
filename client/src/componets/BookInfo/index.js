import React from "react";


function BookInfo() {
    return (
        <div className="wrapper">
            <div className="book-info">
                <div className="height-35">                    
                    <div className="dis-inline-block by-2">
                        <h5>Title:</h5>
                        <h5>Authors:</h5>
                    </div>
                    <div className="dis-inline-block by-2 vertical-align-bottom">
                        <button className="float-right">View</button>
                        <button className="float-right">Save</button>
                    </div>
                </div>
                <div>
                    <img className="dis-inline-block img" src = "https://via.placeholder.com/150C" />
                    <p className="dis-inline-block w-90 vertical-align-top">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

        </div>
    );
  }  
  export default BookInfo;