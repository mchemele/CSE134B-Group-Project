import React, {Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import {Table} from 'reactstrap';
class Forum extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
      announcements: ['Extra Practice Extension Due Date', 'Mistake on Problem #3'],
      topics: ['Tips On How To Improve Study Habits','Looking For Study Group','Confused On Problem #3'],
      newAnnouncement: ''
    }
    this.addItem = this.addItem.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    let newAnnouncement = this.state.newAnnouncement;
    let value = event.target.value;
    console.log(value);
    newAnnouncement = value;

    this.setState({newAnnouncement: newAnnouncement})
  }
  addItem(e) {
    e.preventDefault();
    this.setState({announcements: this.state.announcements.concat(this.state.newAnnouncement)});
  }

  render() {
    let announcements = this.state.announcements
    let topics = this.state.topics
    return (
<div>
         {/* {announcements.map(announcement =>  <h1 key={announcement}>{announcement}</h1> ) } */}
         <Navbar />

         <div className="container">
         <h2>Forum</h2>
         <form className="form-inline" onSubmit={this.addItem}>
              <div className="form-group">
                <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                <input type="text" placeholder="New Topic" className="form-control" id="newItemInput" value={this.state.newAnnouncement} onChange={this.handleChange.bind(this)}/>
              </div>
              <button type="submit" className="btn btn-primary">Add</button>
         </form>
         <Table striped>
        <thead>
          <tr>
            <th>Announcements</th>
            <th>Replies</th>
            <th>Views</th>
            <th>Last Post</th>
          </tr>
        </thead>
        <tbody>
        {
          announcements.map(announcement =>  
          // <h1 key={announcement}>{announcement}</h1> 
          <tr key={announcement}>
            <th scope="row" key={announcement}>{announcement}</th>
            <td>5</td>
            <td>20</td>
            <td>Sat Feb 19, 2017 6:51pm</td>
          </tr>
        )
        }
          
        </tbody>
      </Table>

      <br/>

      <Table striped>
        <thead>
          <tr>
            <th>Topics</th>
            <th>Replies</th>
            <th>Views</th>
            <th>Last Post</th>
          </tr>
        </thead>
        <tbody>
          {
            topics.map( topic =>
              <tr key={topic}>
              <th scope="row" key={topic}>{topic}</th>
              <td>2</td>
              <td>33</td>
              <td>Sat Feb 19, 2017 6:51pm</td>
              </tr>

            )
          }
        </tbody>
      </Table>
         </div>
        </div>
   );
 }
}

export default Forum
