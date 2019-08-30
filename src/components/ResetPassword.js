import React, { Component, Fragment } from "react";
import axios from "axios";

export class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    this.userId = this.authInfo.userId;
    this.authS = this.authInfo.authStatus;

    this.state = {
      userId: null,
      oldPasswordfromServer: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      authSuccess: ""
    };
    this.onChangeOldPassword = this.onChangeOldPassword.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeOldPassword(e) {
    this.setState({ oldPassword: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ newPassword: e.target.value });
  }
  onChangeConfirmPassword(e) {
    this.setState({ confirmPassword: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.oldPassword !== this.state.oldPasswordfromServer) {
      this.setState({ authSuccess: "Old Password Wrong" });
    } else if (this.state.newPassword !== this.state.confirmPassword) {
      this.setState({ authSuccess: "New Passwords Do Not Match" });
    } else {
      const body = {
        id: this.userId,
        password: this.state.newPassword
      };

      axios
        .put("http://localhost:9000/api/users/changePassword", body)
        .then(res => {
          console.log(res.data);
          alert("User has been update");
          window.location = "/ProfilePage";
        });
      this.setState({ authSuccess: "Password changed" });
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:9000/api/users/${this.userId}`).then(res => {
      this.setState({
        oldPasswordfromServer: res.data.password
      });
    });
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <h4>Change Password</h4>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="oldPassword">Old Password</label>
              <input
                className="form-control"
                type="password"
                id="oldPassword"
                placeholder="Old Password"
                onChange={this.onChangeOldPassword}
              />
            </div>

            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                className="form-control"
                type="password"
                id="newPassword"
                placeholder="New Password"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="form-control"
                type="password"
                id="confirmPassword"
                placeholder="Confirm New Password"
                onChange={this.onChangeConfirmPassword}
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary"
              value="Change Password"
            />
          </form>
          <div>{this.state.authSuccess}</div>
        </div>
      </Fragment>
    );
  }
}

export default ResetPassword;
