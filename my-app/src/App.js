import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Switch} from 'react-router-dom';

import Student_Home from './pages/Student_Home.jsx';
import Student_Practice from './pages/Student_Practice.jsx';
import Student_Assignments from './pages/Student_Assignments.jsx';
import Student_Forum from './pages/Student_Forum.jsx';
import Student_Contact from './pages/Student_Contact.jsx';
import Student_Grades from './pages/Student_Grades.jsx';
import Login from './pages/Login.js';
import index from './pages/index.js';
import Roster from './pages/Class_Roster.jsx';
import Teacher_Assignments from './pages/Teacher_Assignments.jsx';
import Teacher_Gradebook from './pages/Teacher_Gradebook.jsx'
import Teacher_Forum from './pages/Teacher_Forum.jsx'
import Teacher_Contact from './pages/Teacher_Contact.jsx'
import Teacher_Practice from './pages/Teacher_Practice.jsx'
import Parent_Home from './pages/Parent_Home.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/index" component={index}/>
          <Route exact path="/student_home" component={Student_Home}/>
          <Route exact path="/student_practice" component={Student_Practice}/>
          <Route exact path="/student_assignments" component={Student_Assignments}/>
          <Route exact path="/student_forum" component={Student_Forum}/>
          <Route exact path="/student_contact" component={Student_Contact}/>
          <Route exact path="/student_grades" component={Student_Grades}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/roster" component={Roster}/>
          <Route exact path="/teacher_assignments" component={Teacher_Assignments}/>
          <Route exact path="/teacher_gradebook" component={Teacher_Gradebook}/>
          <Route exact path="/teacher_forum" component={Teacher_Forum}/>
          <Route exact path="/teacher_contact" component={Teacher_Contact}/>
          <Route exact path="/teacher_practice" component={Teacher_Practice}/>
          <Route exact path="/parent_home" component={Parent_Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
