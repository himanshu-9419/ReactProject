import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from "./containers/Course/Course";
import {BrowserRouter as Router,Route,Switch,NavLink,Redirect} from 'react-router-dom';
class App extends Component {
  render () {
    return (
      <Router>
      <div className="App">
        {/*Router*/}
          <Switch> 
            <Route path="/Courses" component={Courses} />
            <Route path="/Users" component={Users} /> 
            {/* <Route path="/Course/:id" component={Course} /> */}
            <Redirect to="/Courses" from="/all-courses" />
            <Route path="/" exact /> 
            <Route path="" render={()=>(<h1>I'm 404</h1>)} /> 
          </Switch>
        {/*</Router> */}
        <NavLink to="/Courses">Courses</NavLink>
        <NavLink to="/Users">Users</NavLink>
        <NavLink to="/" >Home</NavLink>
        <ol style={{textAlign: 'left'}}>
          <li>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
          <li>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
          <li>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
          <li>Pass the course ID to the "Course" page and output it there</li>
          <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
          <li>Load the "Course" component as a nested component of "Courses"</li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
        </ol>
      </div>
      </Router>
    );
  }
}

export default App;
