import React, {Component } from 'react';
import Navbar from '../components/Navbar_teacher.jsx';
import Messenger from '../components/messenger.js'
import Store from '../components/store.js'

class Teacher_Contact extends Component {
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

export default Teacher_Contact
