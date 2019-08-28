import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class AddFriend extends Component {
  constructor(props) {
    super(props);
    //this.data = null;
    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    this.userId = this.authInfo.userId;
    this.authS = this.authInfo.authStatus;
    //this.nameofuser = localStorage.getItem("TheName");

    this.state = {
      allUsers: []
    };
    this.addContact = this.addContact.bind(this);
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

  addContact(e) {
    e.preventDefault();
    let authInfo = JSON.parse(localStorage.getItem("authInfo"));

    const contactInfo = {
      contactId: e.target.id,
      profileId: authInfo.userId,

      contactType: "Personal"
    };

    //console.log("Query", e.target.id);
    axios.post(`http://localhost:9000/api/contacts/`, contactInfo).then(res => {
      console.log(res);
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
                      <Link onClick={this.addContact} id={user.id}>
                        Add Contact
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

export default AddFriend;
