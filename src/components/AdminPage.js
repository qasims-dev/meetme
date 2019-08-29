import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export class AdminPage extends Component {
  constructor(props) {
    super(props);
    //this.data = null;
    //        this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    //      this.userId = this.authInfo.userId;
    //    this.authS = this.authInfo.authStatus;
    //this.nameofuser = localStorage.getItem("TheName");

    this.state = {
      allUsers: []
    };
    this.removeContact = this.removeContact.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/api/users/`).then(res => {
      /* console.log(res.data);
          this.data = res.data; */
      this.setState({ allUsers: res.data });
      //console.log(this.data);
      /* this.setState({
            firstname: res.data.firstName,
            lastname: res.data.lastName,
            email: res.data.email,
            password: res.data.password
          }); */

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
  removeContact(e) {
    e.preventDefault();
    console.log("USER ID IN REMOVE", e.params);
    const contactInfo = {
      contactId: e.target.id,
      contactImage: e.target.id
    };
    confirmAlert({
      title: "Confirm to submit",

      message: `Are you sure to do this.${contactInfo.contactId}`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            //console.log("IMAGE", contactInfo.contactImage);
            const userinfo = {
              id: this.userId
            };
            axios
              //.delete(`http://localhost:9000/api/users/${this.userId}`)
              .delete(`http://localhost:9000/api/admin/`, {
                params: {
                  id: contactInfo.contactId
                  //     imageName: contactInfo.contactImage
                }
              })
              .then(res => {
                //console.log(res);
                alert("User is removed");
                window.location = "/AdminPage";
                // window.location = "/";
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
        <div>
          <table>
            {this.state.allUsers.map(user => (
              <Fragment>
                <tr>
                  <td>
                    <hr />
                    <h2>
                      {user.firstName} {user.lastName}
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={`http://localhost:9000/images/${user.image}`}
                      alt="alt"
                      className="rounded-circle"
                      style={{ width: "25%" }}
                    />
                  </td>
                  <td>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Last Name: {user.email}</p>
                    <p>User Id: {user.id}</p>
                    <p>
                      <Link
                        onClick={this.removeContact}
                        id={user.id}
                        params={{ userImage: user.image }}
                      >
                        Remove Contact
                      </Link>
                    </p>
                  </td>
                </tr>
                <hr />
              </Fragment>
            ))}
          </table>
        </div>
      </Fragment>
    );
  }
}

export default AdminPage;
