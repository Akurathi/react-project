import React, { Component } from "react";
import firebase from "firebase";
class WelcomPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to this web page {this.props.email}</h1>
        <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
      </div>
    );
  }
}

export default WelcomPage;
