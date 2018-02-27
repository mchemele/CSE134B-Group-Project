import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar_teacher.css';

class Navbar_teacher extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
      <Link className="nav-link" to="/index">iMPROVE!</Link>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/roster">CLASS ROSTER <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teacher_assignments">ASSIGNMENTS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teacher_gradebook">GRADEBOOK</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teacher_forum">FORUM</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teacher_contact">CONTACT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teacher_practice">PRACTICE</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>

    );
  }
}

export default Navbar_teacher
