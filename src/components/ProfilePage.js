import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    this.userId = this.authInfo.userId;
    this.authS = this.authInfo.authStatus;
    //this.nameofuser = localStorage.getItem("TheName");

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/api/users/${this.userId}`).then(res => {
      //console.log(res.data);
      this.setState({
        firstname: res.data.firstName,
        lastname: res.data.lastName,
        email: res.data.email,
        password: res.data.password
      });

      /* if(res.data==="ok")
                {   
                window.location="/ProfilePage";
                }
                else if(res.data==="nok"){
                    //console.log("RESP:Login Failed");
                    this.setState({authSuccess:'Login Failed'});
                }  */
    });
  }
  removeAccount(e) {
    alert("Remove My account");
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div>
            <h1>
              {" "}
              WELCOME {this.state.firstname} {this.state.lastname}
            </h1>
            <hr />
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item">
                <a href="#">Edit Profile</a>
              </li>
              <li className="list-group-item">
                <Link to="/AddFriend">Add Friends</Link>
              </li>
              <li className="list-group-item">
                <Link to="#" onClick={this.removeAccount}>
                  Remove Account
                </Link>
              </li>
            </ul>
            <h3>Your Data</h3>
            <p>First Name: {this.state.firstname}</p>

            <p>Last Name: {this.state.lastname}</p>

            <p>Email: {this.state.email} </p>

            <p>Password: {this.state.password}</p>
            <p>IMAGE COMES HERE</p>
          </div>
        </div>
        <div />
      </Fragment>
    );
  }
}

export default ProfilePage;
