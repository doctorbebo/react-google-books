import React from "react";
import API from "../../utils/API"


function BookInfo(props) {

    const viewBook = (link) =>
    {
        window.location.href = link;
    }

    const saveBook = (book)=>
    {
        if(book._id)
        {
            delete book._id
        }
        API.saveBook(book)
            .then((res) => 
            {     
                console.log(res)
                props.handleState("add", "savedBooks", book)
            })
            .catch((err) => console.log(err));
    }

    const deleteBook = (book_id) => {
        console.log("attempting to delete book with id:" + book_id)
        API.deleteBook(book_id)
          .then((res) => 
          {       
                console.log(res)
                props.handleState("delete", "savedBooks", book_id)
          })
          .catch((err) => console.log(err));
        }

    let books = (<div></div>);
    if(props.canDeleteBook === true)
    {
        books = props.books.map(book => (

            <div className="book-info" key = {book._id}>
                <div className="height-35">                    
                    <div className="dis-inline-block by-2">
                        <h5>Title: <span className="bold">{book.title}</span></h5>
                        <h5>Authors: <span className="bold">{book.authors.join(", ")}</span></h5>
                    </div>
                    <div className="dis-inline-block by-2 vertical-align-bottom">
                        <button className="float-right" onClick={() => viewBook(book.link)}>View</button>
                        <button className="float-right" onClick={() => deleteBook(book._id)}>Delete</button>
                    </div>
                </div>
                <div>
                    <img alt = "" className="dis-inline-block img" src = {book.img} />
                    <p className="dis-inline-block w-90 vertical-align-top">
                        {book.description}
                    </p>
                </div>
            </div>
        ))
    }else
    {
        books = props.books.map(book => (
        
            <div className="book-info" key={book._id}>
                <div className="height-35" >                    
                    <div className="dis-inline-block by-2">
                        <h5>Title: <span className="bold">{book.title}</span></h5>
                        <h5>Authors: <span className="bold">{book.authors.join(", ")}</span></h5>
                    </div>
                    <div className="dis-inline-block by-2 vertical-align-bottom">
                        <button className="float-right" onClick={() => viewBook(book.link)}>View</button>
                        <button className="float-right" onClick={() => saveBook(book)}>Save</button>
                    </div>
                </div>
                <div>
                    <img alt = "" className="dis-inline-block img" src = {book.img} />
                    <p className="dis-inline-block w-90 vertical-align-top">
                        {book.description}
                    </p>
                </div>
            </div>
        ))
    }




    return (
        <div className="wrapper">
            {books}
        </div>
    );
  }  
  export default BookInfo;