import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Films from "./Components/Film/Films.js"
import Header from "./Components/Header/Header.js"
import Users from "./Components/Users/Users.js"
import Login from "./Components/Login/Login.js"
import Post from "./Components/Post/Post.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Route path="/starwars" component={Films} />
          <Route path="/register" component={Post} />
          <Route path="/display-users" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard/:userId" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App