import React from "react";
import BookInfo from "../BookInfo";

class Saved extends React.Component {

  constructor(props)
  {
    super(props)
    console.log(props)
  }

  render()
  {
    return (
        <div>
          <BookInfo books={this.props.savedBooks} canDeleteBook = {true} handleState = {this.props.handleState}/>
        </div>
    );
  }
}
    
  export default Saved;