import React from 'react';
import {connect} from 'react-redux';
import Task from '../task/';
import '../../css/redux-css.css';

class TaskList extends React.Component {
  render() {
    return (
      <div>
      <table>
        <thead><div id="inside-header">
          <tr>
             <th><p>Title</p></th>
             <th><p>Actions</p></th>
          </tr></div>
        </thead>
        <tbody><div id="inside-body">
           {this.props.tasks.map((task,index) => <Task key={index} task={task} />)}
          </div>
        </tbody>
      </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(TaskList);
