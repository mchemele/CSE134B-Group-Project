import React, {Component } from 'react';
import Navigation from '../components/IndexNav.jsx';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';

class Login extends Component {
    handleSignIn(e) {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        // this.props.onSignIn(username, password)

      }
  render() {
    return (
        <div>

        <div className="container">
            <form onSubmit={this.handleSignIn.bind(this)}>
                <h3>Sign in</h3>
                <input type="text" ref="username" placeholder="enter you username" />
                <input type="password" ref="password" placeholder="enter password" />
                <Link className="nav-link" to="/index"> 
                    <input type="submit" value="Login" />
                </Link>
                
            </form>
        </div>
        </div>
       
   );
  }
}

export default Login


 

