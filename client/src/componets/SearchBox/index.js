import React from "react";

class SearchBox extends React.Component
{
  constructor(props)
  {
    super(props)
    this.myRef = React.createRef();
    this.searchText = ""
  }
  handleInputChange = () =>
  {
    this.searchText = this.myRef.current.value;
    console.log(this.searchText);
  }

  handleSubmit = (e) =>
  {
    e.preventDefault();
    this.props.runSeach(this.searchText)
  }

  render ()
  {
    return (
      <div className="wrapper search-form">
        <form>
          <h3>Search for a Book</h3>
          <div className="input-field">
              <div className="">
                  <input ref = {this.myRef} onChange={this.handleInputChange} placeholder="title, authors ect..."></input>
              </div>
              <div className="button">
                  <button onClick = {(e)=> this.handleSubmit(e)} type="submit">Search</button>
              </div>
          </div>
        </form>
      </div>
    )  
  }
}
  export default SearchBox;