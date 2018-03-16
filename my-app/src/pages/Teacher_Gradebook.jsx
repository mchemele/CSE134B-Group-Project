import React, {Component } from 'react';
import Navbar from '../components/Navbar_teacher.jsx';
import * as studentActions from '../actions/studentActions';


class Teacher_Gradebook extends Component {
  render() {
    return (
       <div>
         <Navbar />
         <div className="container">
            <h2>Class Gradebook 2017-2018</h2>
            <div className="content">
               <table className="table">
                   <tr>
                     <th>ID#</th>
                     <th>Student Name</th>
                     <th>Grade</th>
                     <th>Assignment 1</th>
                     <th>Assignment 2</th>
                     <th>Assignment 3</th>
                     <th>Assignment 4</th>
                     <th>Assignment 5</th>
                     <th>Assignment 6</th>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>Johnny Depp</td>
                      <td>A</td>
                      <td>92</td>
                      <td>90</td>
                      <td>95</td>
                      <td>92</td>
                      <td>97</td>
                      <td>97</td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>Travis Noah</td>
                      <td>B+</td>
                      <td>92</td>
                      <td>90</td>
                      <td>95</td>
                      <td>92</td>
                      <td>97</td>
                      <td>97</td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>Cameron Diaz</td>
                      <td>A</td>
                      <td>92</td>
                      <td>90</td>
                      <td>95</td>
                      <td>92</td>
                      <td>97</td>
                      <td>97</td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>Cameron Diaz</td>
                      <td>A</td>
                      <td>92</td>
                      <td>90</td>
                      <td>95</td>
                      <td>92</td>
                      <td>97</td>
                      <td>97</td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>Cameron Diaz</td>
                      <td>A</td>
                      <td>92</td>
                      <td>90</td>
                      <td>95</td>
                      <td>92</td>
                      <td>97</td>
                      <td>97</td>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>Cameron Diaz</td>
                      <td>A</td>
                      <td>92</td>
                      <td>90</td>
                      <td>95</td>
                      <td>92</td>
                      <td>97</td>
                      <td>97</td>
                    </tr>
                </table>
            </div>
            </div>
        </div>
   );
  }
}

export default Teacher_Gradebook
