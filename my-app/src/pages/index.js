import React, {Component } from 'react';
import Navigation from '../components/IndexNav.jsx';

class index extends Component {
  render() {
    return (
       <div>
         <Navigation />
         <div className="container">
            <h2>click on tab to enter Student, Parent or Teacher page</h2>
            </div>
        </div>
   );
  }
}

export default index
