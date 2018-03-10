import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addTask from '../../actions/';
import '../../css/redux-css.css';

class TaskBar extends React.Component {
  render() {
    return (
    <div id="two">
      <input id="add-text" type="text" ref="task" placeholder="Add Item Here" />
      <button id="add-button" onClick={()=> this.props.addTask(this.refs.task.value)}>Add</button>
    </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(addTask, dispatch);
}

export default connect(()=>{}, mapDispatchToProps)(TaskBar);
