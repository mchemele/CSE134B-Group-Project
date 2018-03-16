import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class IndexNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">iMPROVE! <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/student_home" id="student"> >>>STUDENT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/parent_home" id="parent"> >>>PARENT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/roster" id="teacher"> >>>TEACHER</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    );
  }
}

export default IndexNav
