import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import React, { Component } from "react";


class SignupNome extends Component {
  render() {
    return (
      <div className="loginBox">
      <h1>Choose</h1>
      <form>
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          label="user"
          onClick={()=>{window.location.replace("/signup-user")}}
        />
        <br />
        <RaisedButton
          className="signUpSubmit"
          primary={true}
          label="nome"
          onClick={()=>{window.location.replace("/signup-nome")}}
        />
      </form>
    </div>
    );
  }
}

export default SignupNome;