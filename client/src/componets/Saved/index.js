import React from "react";
import API from "../../utils/API"

const testBook = {
  title: "Test Title",
  authors: ["Test Author"],
  description: "test desc",
  img: "test img link",
  link: "test link"
}

class Saved extends React.Component {

  state = {
    books : [
      {title: "",
       authors: [""],
       description: "",
       img: "",
       link: "",
       _id: "1234"
    }]
  }

  addBook = () => {
    console.log("attempting to add book.")
    API.saveBook(testBook)
    .then((res) => 
    {       
      console.log(res)
      this.setState({"books": this.state.books.concat([testBook])});
    })
    .catch((err) => console.log(err));
  }
  deleteBook = () => {
    console.log("attempting to delete book with id:" + this.state.books[0]._id)
    API.deleteBook(this.state.books[0]._id)
      .then((res) => 
      {       
        console.log(res)
        this.setState({"books": this.state.books.filter(book => book._id !== this.state.books[0]._id)})
      })
      .catch((err) => console.log(err));
    }

  componentDidMount()
  {
    API.getBook()
      .then((res) => this.setState({"books": res.data}))
      .catch(err => console.log(err));
  }

  render()
  {
    const books = this.state.books.map((book) =>(
      <div> 
        <h4>{book.title}</h4>
        <h4>{book.authors[0]}</h4>
        <h4>{book.description}</h4>
        <h4>{book.img}</h4>
        <h4>{book.link}</h4>
        <h4>{book._id}</h4>
      </div>
      ));


    return (
      <div className="">
        <div>
          {books}
        </div>
        <h1>Hello from Search</h1>
        <div>
          <button onClick={this.addBook} >Test add Book</button>          
          <button onClick={this.deleteBook} >Delete a Book</button>
        </div>
      </div>

    );
  }
}
    
  export default Saved;