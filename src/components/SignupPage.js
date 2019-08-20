import React, { Component } from "react";
//import { UserService } from "./../userservice";
//import { HTTP } from '../http';
import axios from "axios";

export class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.state={users:[]};
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      is_active: "",
      created_at: ""
    };
  }

  onChangeFirstName(e) {
    console.log("IN FIRST NAME CHANGE FUNC");
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
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

  currentDates() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    return dateTime;
  }
  onSubmit = e => {
    e.preventDefault();

    //componentDidMount(){
    //UserService.getAll()
    //HTTP.get("/api/users").then(console.log(users=>this.state({users})));
    console.log("INSIDE POST");
    console.log("Target Value:", e.target.value);
    /* const jawab = { "id": null,
            "firstName": "test",
            "lastName": "sectest",
            "email": "test@gmail.com",
            "password": "test",
            "is_active": 0,
            "created_at": "2013-07-17 17:18:55"}
 */

    let c = this.currentDates();
    const body = {
      id: null,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      is_active: 0,
      created_at: c
    };

    axios.post("http://localhost:9000/api/users", body).then(res => {
      console.log(res.data);
      alert("User has been created");
    });

    /* UserService.postAll(console.log("POSTED"),{ "id": null,
            "firstName": "test",
            "lastName": "sectest",
            "email": "test@gmail.com",
            "password": "test",
            "is_active": 0,
            "created_at": "21.07.2019 17:43"}) */
  };
  //}

  /* componentDidMount(){
        //UserService.getAll()
        //HTTP.get("/api/users").then(console.log(users=>this.state({users})));
        UserService.postAll(console.log("POSTED"),{ "id": null,
        "firstName": "test",
        "lastName": "sectest",
        "email": "test@gmail.com",
        "password": "test",
        "is_active": 0,
        "created_at": "21.07.2019 17:43"})
    }     */

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Frist Name</label>
            <input
              className="form-control"
              type="text"
              id="firstName"
              placeholder="Enter First Name"
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
              onChange={this.onChangeLastName}
            />
          </div>

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

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hasAgreed"
            />
            <label className="form-check-label">
              I agree all statements in <a href="#">terms of service</a>
            </label>
          </div>

          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignupPage;
