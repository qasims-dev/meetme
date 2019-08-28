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
    this.onChangeImage = this.onChangeImage.bind(this);
    this.uploadImgfunc = this.uploadImgfunc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.state={users:[]};
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      is_active: "",
      created_at: "",
      imageInfo: [{ imageName: "admin.png", imagebuffer: null }]
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

  onChangeImage(e) {
    //this.setState({ imagebuffer: e.target.files[0] });
    this.setState({
      imageInfo: { imageName: e.target.value, imagebuffer: e.target.files[0] }
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

  uploadImgfunc() {
    const body = new FormData();
    body.append("file", this.state.imageInfo.imagebuffer);
    axios.post("http://localhost:9000/api/usersImage", body).then(res => {
      //console.log(res.data);
      // alert("Image upload");
    });
  }

  onSubmit = e => {
    e.preventDefault();

    let c = this.currentDates();
    const body = {
      id: null,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      image: this.state.imageInfo.imageName,
      is_active: 0,
      created_at: c
    };
    /* const bodydata = new FormData();
    bodydata.append("body", body);
    bodydata.append("image", this.state.image);
    console.log(bodydata); */
    //body.append(bodydata);
    console.log(this.state.imageInfo.imageName);
    axios.post("http://localhost:9000/api/users", body).then(res => {
      // console.log(res.data);
      alert("User has been created");
    });
    if (this.state.imageInfo.imageName !== "admin.png") {
      console.log("IMAGE NOT SELECTED");
      this.uploadImgfunc();
    }
  };

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

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              className="form-control"
              type="file"
              id="image"
              onChange={this.onChangeImage}
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
