import React from "react";
import SearchBox from "../SearchBox"
import BookInfo from "../BookInfo"
import API from "../../utils/API"


class Search extends React.Component 
{
  constructor (props)
  {
    super(props)
    this.state = 
    {
      googleBooks: []
    }
  }
  runSearch = (query)=>
  {
    API.runSearch(query)
      .then(res => 
        {
          let books = [];
          res.data.items.forEach(item => {

            books.push({
              title: item.volumeInfo.title,
              authors: item.volumeInfo.authors,
              description :item.volumeInfo.description,
              img: item.volumeInfo.imageLinks.thumbnail,
              link: item.volumeInfo.infoLink,
              _id: item.id
            })
          });
          this.setState({"googleBooks": books})
        })
      .catch(err => console.log(err));
  }

  render()
  {
    return (
      <div>
        <button onClick= {() => this.runSearch("Harry Potter")}>run Search</button>
        <SearchBox/>
        <BookInfo books={this.state.googleBooks} canDeleteBook = {false} handleState = {this.props.handleState} />
      </div>
    )  
  }
}
  
export default Search;