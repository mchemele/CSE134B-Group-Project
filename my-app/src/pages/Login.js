import React, {Component } from 'react';
import Navigation from '../components/IndexNav.jsx';
import { Link, Redirect } from 'react-router-dom';
import { Button, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

class Login extends Component {


  render() {
    return (
        <div>
        
        <div style={styles.title}>iMPROVE</div>
        <div className="container" style={styles.container}>
           <h3 style={styles.signIn}>Sign In As</h3>
           <ButtonGroup style={styles.buttonText}>
                <Link to="/parent_home">
                    <Button>PARENT</Button>{' '}
                </Link>
                <Link to="/student_home">
                    <Button>STUDENT</Button>{' '}
                </Link>
                <Link to="/roster">
                    <Button>TEACHER</Button>
                </Link>
           </ButtonGroup>

            {/* <FormGroup>
                <Label for="exampleSelect" style={styles.signIn}>Sign in as</Label>
                <Input onChange={this._handleChange} type="select" name="select" ref="signIn">
                    <option>Student</option>
                    <option>Parent</option>
                    <option>Teacher</option>
                </Input>
            </FormGroup> */}
            </div>
        </div>
       
   );
  }
}
const styles = {
    container: {
        height: "100px",
        width: "350px",
        background: "#FCFCFC",
        borderRadius: "10px",
        border: "2px solid #EAEAEA",
        marginTop: "50px"
    },
    title: {
        textAlign:"center",
        fontSize: "50px"
    },
    signIn: {
        fontSize: "25px",
        textAlign: "center",
    },
    buttonText: {
        color: "black",
        textAlign: "center"
    }



};
export default Login


 

