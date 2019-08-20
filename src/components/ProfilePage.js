import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

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
    this.removeAccount = this.removeAccount.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/api/users/${this.userId}`).then(res => {
      console.log("USER ID IN MOUNT", this.userId);
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

  removeAccount() {
    //alert("Remove My account");
    console.log("USER ID IN REMOVE", this.userId);
    confirmAlert({
      title: "Confirm to submit",

      message: `Are you sure to do this.${this.userId}`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(`http://localhost:9000/api/users/${this.userId}`)
              .then(res => {
                localStorage.removeItem("authInfo");

                window.location = "/";
              });
          }
        },
        {
          label: "No"
          // onClick: () => alert("Click No")
        }
      ]
    });
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
                <Link to="/EditProfile">Edit Profile</Link>
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
