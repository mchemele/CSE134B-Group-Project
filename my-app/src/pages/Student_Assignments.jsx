import React, {Component } from 'react';
import Navbar from '../components/Navbar.jsx';

class Student_Assignments extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
           <h2>Assignments</h2>
           <div className="content">
              <table className="table">
                  <tr>
                    <th>Title</th>
                    <th>Assignment</th>
                    <th>Complete</th>
                   </tr>
                   <tr>
                     <td>Trigonometry</td>
                     <td>Assignment 1</td>
                     <td>Yes</td>
                   </tr>
                   <tr>
                     <td>Solve fror X</td>
                     <td>Assignment 2</td>
                     <td>No</td>
                   </tr>
                   <tr>
                     <td>Functions</td>
                     <td>Assignment 3</td>
                     <td>Yes</td>
                   </tr>
               </table>
           </div>
           </div>
       </div>
   );
  }
}

export default Student_Assignments
