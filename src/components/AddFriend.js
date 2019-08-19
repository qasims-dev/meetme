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
                    <p>
                      <Link to="/AddFriend">Add Contact</Link>
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
