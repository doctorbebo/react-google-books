import React from "react";
import API from "../../utils/API"

class Search extends React.Component {

  state = {
    books : [
      {title: "",
       authors: [""],
       description: "",
       img: "",
       link: "" 
    }]
  }

  componentDidMount()
  {
    API.getBook().then((res) => this.setState({"books": res.data})).catch(err => console.log(err));
  }

  render()
  {
    return (
      <div className="">
          <h1>{this.state.books[0].title}</h1>
          <h1>{this.state.books[0].authors[0]}</h1>
          <h1>{this.state.books[0].description}</h1>
          <h1>{this.state.books[0].img}</h1>
          <h1>{this.state.books[0].link}</h1>
          <h1>{this.state.books[0]._id}</h1>
          <h1>Hello from Search</h1>
      </div>
    );
  }
}
    
  export default Search;