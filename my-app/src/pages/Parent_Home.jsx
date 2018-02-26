import React, {Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import bar from '../images/bar.jpg'

class Parent_Home extends Component {
  render() {
    return (
       <div>
         <Navbar />
         <div className="container">
            <h2>Hello, Johnny Depps Mother!</h2>
            <p>Here is your childs current progress:</p>
            <img src={bar} alt='progress bar'/>
            </div>
        </div>
   );
  }
}

export default Parent_Home
