import React, { Component } from "react";
import axios from "axios";

export class EditProfilePage extends Component {
  constructor(props) {
    super(props);

    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    this.userId = this.authInfo.userId;
    this.authS = this.authInfo.authStatus;
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);

    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.state={users:[]};
    this.state = {
      userId: null,
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/api/users/${this.userId}`).then(res => {
      console.log("USER ID IN MOUNT", this.userId);
      this.setState({
        userId: res.data.id,
        firstname: res.data.firstName,
        lastname: res.data.lastName,
        email: res.data.email,
        password: res.data.password
      });
    });
  }

  onChangeFirstName(e) {
    console.log("IN FIRST NAME CHANGE FUNC");
    this.setState({
      firstname: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const body = {
      id: this.state.userId,
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      password: this.state.password
    };

    axios.put("http://localhost:9000/api/users", body).then(res => {
      console.log(res.data);
      alert("User has been update");
      window.location = "/ProfilePage";
    });
  };

  render() {
    return (
      <div className="container">
        <h4>Edit Profile</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Frist Name</label>
            <input
              className="form-control"
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              value={this.state.firstname}
              onChange={this.onChangeFirstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="form-control"
              type="text"
              id="lastName"
              placeholder="Enter Last Name"
              value={this.state.lastname}
              onChange={this.onChangeLastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Write Your Password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Submit" />
          <input type="submit" className="btn btn-primary" value="Cancel" />
        </form>
      </div>
    );
  }
}

export default EditProfilePage;
