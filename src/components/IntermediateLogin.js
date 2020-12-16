import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import React, { Component } from "react";
import {Container} from 'react-bootstrap'


class IntermediateLogin extends Component {
  render() {
    return (
      <Container  >
      <h1>Choose</h1>
      <div>
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          label="user"
          onClick={()=>{window.location.replace("/login-user")}}
        />
        <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          label="nome"
          onClick={()=>{window.location.replace("/login-nome")}}
        />
      </div>
      
    </Container>
    );
  }
}

export default IntermediateLogin;