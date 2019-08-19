import React, { Component } from "react";

export class LogoutPage extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("authInfo");
    this.state = {};
    window.location = "/";
  }
  render() {
    return <div />;
  }
}

export default LogoutPage;
