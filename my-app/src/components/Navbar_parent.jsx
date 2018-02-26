import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';

class Navbar_parent extends Component {
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
          <li className="nav-item">
            <Link className="nav-link" to="/parent_home">HOME <span class="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/practice">PRACTICE</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/assignments">ASSIGNMENTS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/forum">FORUM</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">CONTACT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/grades">GRADES</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>

    );
  }
}

export default Navbar_parent
