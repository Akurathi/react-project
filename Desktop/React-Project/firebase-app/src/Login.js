import React, { Component, Fragment } from "react";
import firebase from "firebase";
import { Redirect } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomPage from "./WelcomPage";

class Login extends Component {
  state = {
    displayWelcome: false,
    isSignedIn: false,
    username: "",
    password: ""
  };

  iConfig = {
    apiKey: "AIzaSyDf67hsWWSkb3Mr5zOOuuvFC8AUkp32pC0",
    authDomain: "fir-login-6dd75.firebaseapp.com",
    databaseURL: "https://fir-login-6dd75.firebaseio.com",
    projectId: "fir-login-6dd75",
    storageBucket: "fir-login-6dd75.appspot.com",
    messagingSenderId: "727901377149"
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount = () => {
    firebase.initializeApp(this.iConfig);

    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: !!user,
        displayWelcome: true
      });
    });
  };

  Login = () => {
    var userEmail = this.state.username;
    var userPass = this.state.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(userEmail, userPass)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
      });
  };

  render() {
    return (
      <Fragment>
        <div>
          UserName : <input name="username" onChange={this.handleChange} />
          <br />
          PassWord :{" "}
          <input type="password" name="password" onChange={this.handleChange} />
          <br />
          <button onClick={this.Login}>submit</button>
        </div>

        {this.state.displayWelcome ? (
          this.state.isSignedIn ? (
            // <span>
            //   <div>Signed in </div>
            //   <h1>Welcome {firebase.auth().currentUser.email}</h1>
            //   <button onClick={() => firebase.auth().signOut()}>
            //     Sign out!
            //   </button>
            // </span>
            // <Router>
            //   <Route path="/welcome">
            <Router>
              <Redirect to="/Welcome">
                <WelcomPage email={this.state.username} />
              </Redirect>
            </Router>
          ) : (
            // </Route>
            // </Router>
            <div></div>
          )
        ) : (
          <div></div>
        )}
      </Fragment>
    );
  }
}

export default Login;
