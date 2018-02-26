import React, {Component } from 'react';
import Navbar from '../components/Navbar.jsx';

class Student_Practice extends Component {
    render() {
      return (
         <div>
           <Navbar />
           <div className="container">
              <h2>Extra Practice Worksheets</h2>
              <div className="content">
                 <table className="table">
                     <tr>
                       <th>Title</th>
                       <th>Worksheet</th>
                       <th>Complete</th>
                      </tr>
                      <tr>
                        <td>Trigonometry</td>
                        <td>Worksheet 1</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Solve fror X</td>
                        <td>Worksheet 2</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <td>Functions</td>
                        <td>Worksheet 3</td>
                        <td>Yes</td>
                      </tr>
                  </table>
              </div>
              </div>
          </div>
     );
    }
  }

export default Student_Practice
