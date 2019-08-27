import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: []
    };
    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    this.userId = this.authInfo.userId;
  }

  componentDidMount() {
    //axios.get(`http://localhost:9000/api/contacts/${this.userId}`).then(res => {

    axios.get(`http://localhost:9000/api/users/`).then(res => {
      console.log("USER ID IN MOUNT", this.userId);
      this.setState({ allUsers: res.data });
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
                      src="https://source.unsplash.com/random/150x150"
                      alt="alt"
                    />
                  </td>
                  <td>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Last Name: {user.email}</p>
                    <p>User Id: {user.id}</p>
                    <p>
                      <Link onClick={this.addContact} id={user.id}>
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

export default Contacts;
