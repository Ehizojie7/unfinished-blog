import { useState } from 'react'
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails'


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
    <Route exact path="/">
    <Home />
    </Route>
        </Switch>

        <Switch>
    <Route exact path="/create">
    <Create />
    </Route>
        </Switch>

        <Switch>
    <Route exact path="/blogs/:id">
    <BlogDetails />
    </Route>
        </Switch>
      </div>
    
    </div>
    </Router>
  );
}

export default App
