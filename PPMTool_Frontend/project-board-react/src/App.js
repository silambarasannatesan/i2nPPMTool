import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import ProjectBoard from './Components/ProjectBoard';
import AddProjectTask from "./Components/ProjectTask/AddProjectTask";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={ProjectBoard} />
          <Route exact path="/addProjectTask" component={AddProjectTask} />
        </div>
      </Router>
    );
  }
}
export default App;