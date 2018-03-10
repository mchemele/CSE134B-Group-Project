import React from 'react';
import {bindActionCreators} from 'redux';
import deleteTask from '../../actions/';
import {connect} from 'react-redux';
import '../../css/redux-css.css';

class Task extends React.Component {
  render() {
    return (
      <div id="one">
      <tr>
        <td id="blah">
          {this.props.task}
        </td>
        <td id="blah2">
           <button onClick={()=> {this.props.deleteTask(this.props.id)}}>Remove</button>
        </td>
      </tr>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(deleteTask, dispatch);
}

export default connect(()=>{return {};}, mapDispatchToProps)(Task);
