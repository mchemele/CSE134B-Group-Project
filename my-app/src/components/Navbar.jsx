import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar_student.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
      <Link className="nav-link" to="/">iMPROVE!</Link>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/student_home">HOME <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/student_practice" id="practice">PRACTICE</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/student_assignments" id="assignments">ASSIGNMENTS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/student_forum" id="forum">FORUM</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/student_contact" id="contact">CONTACT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/student_grades" id="grades">GRADES</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>

    );
  }
}

export default Navbar
