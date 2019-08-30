import React, { Component, Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ExampleComponent from "react-rounded-image";

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

    axios.get(`http://localhost:9000/api/contacts/${this.userId}`).then(res => {
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
    if (this.state.allUsers.length === 0 || !this.state.allUsers.length) {
      console.log("ARRAY LEN", this.state.allUsers.length);

      return (
        <div className="container">
          <h4>Contacts</h4>
          <p>You currently have not contacts.</p>
        </div>
      );
    }
    return (
      <Fragment>
        <div className="container">
          <h4>Contacts</h4>
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
                        onClick={this.addContact}
                        id={user.id}
                        class="btn btn-primary btn-lg"
                      >
                        Remove Contact
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
export default Contacts;
