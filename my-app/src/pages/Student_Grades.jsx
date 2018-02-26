import React, {Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import '../css/Grades.css';

class Student_Grades extends Component {
  render() {
    return (
       <div>
         <Navbar />
         <div className="container">
            <h2>Grades</h2>
            <div className="content">
               <table className="table">
                   <tr>
                     <th>Subject</th>
                     <th>Grade</th>
                     <th>%</th>
                    </tr>
                    <tr>
                      <td>Trigonometry</td>
                      <td>C</td>
                      <td>78%</td>
                    </tr>
                    <tr>
                      <td>Solve for X</td>
                      <td>A-</td>
                      <td>89%</td>
                    </tr>
                    <tr>
                      <td>Functions</td>
                      <td>A</td>
                      <td>94%</td>
                    </tr>
                </table>
            </div>
            </div>
        </div>
   );
  }
}

export default Student_Grades
