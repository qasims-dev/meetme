import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ExampleComponent from "react-rounded-image";

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
    console.log("USER ID IN MOUNT", this.userId);
    //axios.get(`http://localhost:9000/api/users/`).then(res => {
    axios
      .get(`http://localhost:9000/api/users/all/${this.userId}`)
      .then(res => {
        console.log("RETURN TO ADD FRIENDS", res.data);
        //  this.data = res.data; */
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
      //console.log(res);
      alert("Contact has been added");
    });
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <h4>Add Contact</h4>
          {this.state.allUsers.map(user => (
            <Fragment>
              <div className="jumbotron jumbotron-fluid" style={jStyle}>
                <div className="row">
                  <div className="col-md-8">
                    <h2>
                      {user.firstName} {user.lastName}
                    </h2>
                    <p>First Name: {user.firstName}</p>
                    <p>Last Name: {user.lastName}</p>
                    <p>Last Name: {user.email}</p>
                    <p>User Id: {user.id}</p>
                    <p>
                      <Link
                        class="btn btn-primary btn-lg"
                        onClick={this.addContact}
                        id={user.id}
                      >
                        Add Contact
                      </Link>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <ExampleComponent
                      image={`http://localhost:9000/images/${user.image}`}
                      roundedColor="grey"
                      imageWidth="200"
                      imageHeight="200"
                      roundedSize="5"
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  }
}

const jStyle = {
  border: "none",
  padding: "15px 0px 15px 50px"
};
export default AddFriend;
