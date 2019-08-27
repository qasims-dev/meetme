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
      password: "",
      image: "",
      imgbuffer: null
    };
    this.removeAccount = this.removeAccount.bind(this);
    this.bringImg = this.bringImg.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/api/users/${this.userId}`).then(res => {
      console.log("USER ID IN MOUNT", this.userId);
      this.setState({
        firstname: res.data.firstName,
        lastname: res.data.lastName,
        email: res.data.email,
        password: res.data.password,
        image: res.data.image
      });
      this.bringImg();
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

  bringImg(e) {
    //e.preventDefault();
    const imginfo = {
      imageName: this.state.image
    };
    // console.log(imginfo);
    axios.post("http://localhost:9000/api/getUserimg", imginfo).then(res => {
      // var base64Flag = "data:image/png;base64,";
      //  var imageStr = this.arrayBufferToBase64(data.img.data.data);
      // console.log("THIS IS IMAGE DATA:", res);
      //var imageStr = this.arrayBufferToBase64(res.data);
      // console.log("THIS IS IMAGE AFTER BASE64:", imageStr);
      //this.setState({ imagebuffer: base64Flag + imageStr });
      //alert("IMAGE GET IS CLICKED");
      var imgs = "data:image/png;base64," + res.data;

      //console.log("THIS IS IMAGE DATA:", btoa(res.data));
      this.setState({ imgbuffer: imgs });
      // console.log("Buffer sate", this.state.imgbuffer);
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
            /* const userinfo = {
              id: this.userId,
              imageName: this.state.image
            }; */
            axios
              //.delete(`http://localhost:9000/api/users/${this.userId}`)
              .delete(`http://localhost:9000/api/users/`, {
                params: { id: this.userId, imageName: this.state.image }
              })
              .then(res => {
                console.log(res);
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
                <Link to="/AddFriend">Add Contact</Link>
              </li>
              <li className="list-group-item">
                <Link to="/Contacts">Contacts</Link>
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
            <p>
              Image:{" "}
              <img
                src={
                  //process.env.PUBLIC_URL + "/profileImages/admin.png"
                  this.state.imgbuffer
                }
                alt="alt"
                className="rounded-circle"
                style={{ width: "25%" }}
              />
            </p>
          </div>
        </div>
        <div />
      </Fragment>
    );
  }
}

export default ProfilePage;
