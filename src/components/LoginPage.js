import React, { Component, Fragment } from "react";
import axios from "axios";

//const MyContext = React.createContext(UserContext);

export class LoginPage extends Component {
  //  export default function LoginPage(){
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      authSuccess: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const authInfo = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post("http://localhost:9000/api/users/auth", authInfo).then(res => {
      //console.log("this is res", res);
      //if (res.data === "ok") {

      if (res.data.id !== 0) {
        let loginObj = { userId: res.data.id, authStatus: 1 };
        localStorage.setItem("authInfo", JSON.stringify(loginObj));
        console.log(res.data.id);
        //const name = this.state.email;
        //localStorage.setItem("TheName", name);
        window.location = "/ProfilePage";
      }
      //else if (res.data === "nok") {
      else if (res.data.id === 0) {
        this.setState({ authSuccess: "Login Failed" });
      }
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Enter Email"
                onChange={this.onChangeEmail}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="Write Your Password"
                onChange={this.onChangePassword}
              />
            </div>

            <input type="submit" className="btn btn-primary" value="Sign in" />
            <a href="#">Forgot Password</a>
          </form>
          <div>{this.state.authSuccess}</div>
        </div>
      </Fragment>
    );
  }
}

export default LoginPage;
