import React, {Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Messenger from '../components/messenger.js'
import Store from '../components/store.js'

class Student_Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: new Store(this),
    }
  }

  render() {
    const {store} = this.state;
    return (
       <div>
         <Navbar />
         <div className="container">
          <Messenger store={store} />
         </div>
        </div>
   );
 }
}

export default Student_Contact
