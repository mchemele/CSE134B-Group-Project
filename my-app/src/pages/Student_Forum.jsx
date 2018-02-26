import React, {Component } from 'react';
import Navbar from '../components/Navbar.jsx';

class Forum extends Component {
  render() {
    return (
       <div>
         <Navbar />
         <div className="container">
          <p> inside student FORUM!!!</p>
         </div>
        </div>
   );
 }
}

export default Forum
