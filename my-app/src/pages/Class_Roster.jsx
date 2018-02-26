import React, {Component } from 'react';
import Navbar from '../components/Navbar_teacher.jsx';

class Roster extends Component {
  render() {
    return (
       <div>
         <Navbar />
         <div className="container">
            <h2>Class Roster 2017-2018</h2>
            <div className="content">
               <table className="table">
                   <tr>
                     <th>ID#</th>
                     <th>Student Name</th>
                     <th>Grade</th>
                     <th>Email</th>
                     <th>Parent</th>
                    </tr>
                    <tr>
                      <td>123</td>
                      <td>Johnny Depp</td>
                      <td>A</td>
                      <td>johnny@ucsd.edu</td>
                      <td>Robert Smith</td>
                    </tr>
                    <tr>
                      <td>234</td>
                      <td>Brad Pitt</td>
                      <td>A-</td>
                      <td>brad@pitt.com</td>
                      <td>Poo Bear</td>
                    </tr>
                    <tr>
                      <td>234</td>
                      <td>Brad Pitt</td>
                      <td>A-</td>
                      <td>brad@pitt.com</td>
                      <td>Poo Bear</td>
                    </tr>
                    <tr>
                      <td>345</td>
                      <td>Kate Winslet</td>
                      <td>B+</td>
                      <td>kate@winslet</td>
                      <td>Kates Mom</td>
                    </tr>
                    <tr>
                      <td>234</td>
                      <td>Brad Pitt</td>
                      <td>A-</td>
                      <td>brad@pitt.com</td>
                      <td>Poo Bear</td>
                    </tr>
                    <tr>
                      <td>234</td>
                      <td>Brad Pitt</td>
                      <td>A-</td>
                      <td>brad@pitt.com</td>
                      <td>Poo Bear</td>
                    </tr>
                    <tr>
                      <td>234</td>
                      <td>Brad Pitt</td>
                      <td>A-</td>
                      <td>brad@pitt.com</td>
                      <td>Poo Bear</td>
                    </tr>
                </table>
            </div>
            </div>
        </div>
   );
  }
}

export default Roster
