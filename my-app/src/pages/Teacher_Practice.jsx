import React, {Component } from 'react';
import Navbar from '../components/Navbar_teacher.jsx';

class Teacher_Practice extends Component {

  constructor(props) {
    super(props);

    this.state = {
      buyItems: ['Solve for x', 'Trigonometry', 'Equations'],
      message: ''
    }
  }

  addItem(e) {
    e.preventDefault();
    const{buyItems} = this.state;
    const newItem = this.newItem.value;

    const isOnTheList = buyItems.includes(newItem);

    if(isOnTheList) {
      this.setState ({
        message: 'This item is already on the list.'
      })
    } else {
   newItem !== '' && this.setState( {
      buyItems: [newItem,...this.state.buyItems]
    })
  }
    this.addForm.reset();
  }

  removeItem(item) {
    const newBuyItems = this.state.buyItems.filter(buyItem => {
      return buyItem !== item;
    });

    this.setState ({
      buyItems:[...newBuyItems]
    })
  }

  render() {
    const {buyItems, message} = this.state;
    return (
       <div>
         <Navbar />
         <div className="container">
            <h2>Extra Practice</h2>
            <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
              <div className="form-group">
                <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                <input ref={input => this.newItem = input} type="text" placeholder="Add Item Here" className="form-control" id="newItemInput" />
              </div>
              <button type="submit" className="btn btn-primary">Add</button>
            </form>

            <div className="content">
            {
              message !== '' && <p className="message text-danger">{message}</p>
            }
               <table className="table">
                 <thead>
                   <tr>
                     <th>Title</th>
                     <th>Worksheet</th>
                     <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                      buyItems.map(item => {
                        return (
                    <tr key={item}>
                      <td className="text-left">{item}</td>
                      <th scope="row">C:\Sample\Documents</th>
                      <td className="text-right">
                         <button onClick={(e) => this.removeItem(item)} type="button" className="btn btn-default btn-sm">
                            Remove</button></td>
                    </tr>
                  )
                })
              }
                  </tbody>
                </table>
            </div>
            </div>
        </div>
   );
  }
}

export default Teacher_Practice
