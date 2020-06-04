import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./componets/Saved";
import Search from "./componets/Search";
import NavBar from "./componets/Navbar"
import WelcomeBanner from "./componets/WelcomeBanner"
import "./App.css";
import API from "./utils/API";

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.displyRef = React.createRef()
    this.state = 
    {
      savedBooks: []
    }
  }

  handleState = (type, key, value = undefined) =>
  {
    let items = this.state[[key]];
    console.log(this.state[[key]]);
    if(type === "add")
    {
      if(Array.isArray(items))
      {
        items.push(value); 
        this.setState({[key]: items}, ()=>
        {
          this.displayMessage("Book Saved")
        })
      }
    }else if (type === "delete") {
      if(Array.isArray(items))
      {
        for (let i = 0; i < items.length; i++) 
        {
          const element = items[i];
          if(element._id === value)
          {
            items.splice(i,1);
            this.setState({[key]: items});
            return;
          }
        }
      }
    }else {
      console.log("define a type in handleState function")
    }
  }

  displayMessage = (message)=>
  {
    this.displyRef.current.innerText = message;
    this.displyRef.current.classList.value = "notification-bar-revealed"
    this.timerID = setTimeout(      
      ()=> this.displyRef.current.classList.value = "notification-bar-hidden",      
      1000);

  }


  componentDidMount()
  {
    API.getBook()
      .then(res => 
      {
        this.setState({"savedBooks": res.data});
      })
      .catch(err => console.log(err));

      this.timerID = setTimeout(      
        ()=> this.displyRef.current.classList.value = "notification-bar-hidden",      
        1000);

      this.displyRef.current.innerText = "Hello World"
      console.log(this.displyRef)
  }

  render()
  {
    return (
      <Router>
          <NavBar/>
          <WelcomeBanner/>
          <Route path="/" exact render={() => <Search handleState={this.handleState} />}/>
          <Route path="/saved" exact render={() => <Saved savedBooks = {this.state.savedBooks} handleState={this.handleState} />}/>
          <div className="notification-bar-hidden" ref = {this.displyRef}></div>
      </Router>
    )}
}


export default App;
