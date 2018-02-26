import React, {Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import bar from '../images/bar.jpg'

class Student_Home extends Component {
  render() {
    return (
       <div>
         <Navbar />
         <div className="container">
            <h2>Hello, Johnny Depp!</h2>
            <p>Here is your current progress:</p>
            <img src={bar} />
            </div>
        </div>
   );
  }
}

export default Student_Home
