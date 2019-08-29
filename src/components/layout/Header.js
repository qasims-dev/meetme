import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

//export default function Header() {
class Header extends Component {
  constructor(props) {
    super(props);
    /*     let loginObj = { user: "user@user.com", authStatus: 0 };
    localStorage.setItem("authInfo", JSON.stringify(loginObj)); */

    this.authInfo = JSON.parse(localStorage.getItem("authInfo"));
    //this.userN = this.authInfo.user;
    if (this.authInfo) {
      this.authS = this.authInfo.authStatus;
    }
    //userLog = true;
    this.authLinks = (
      <Fragment>
        <li>
          ICON <Link to="/LogoutPage"> Logout</Link>
        </li>
      </Fragment>
    );

    this.guestLinks = (
      <Fragment>
        <Link to="/signupPage"> Signup </Link>|
        <Link to="/loginPage"> Signin</Link>
      </Fragment>
    );
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              MeetMe App
            </a>

            <span className="navbar-text">
              <div>{this.authS === 1 ? this.authLinks : this.guestLinks}</div>
            </span>
          </nav>
        </div>
      </Fragment>
    );
  }
}

/* const headerStyle={
    background: 'grey',
    color: '#fff',
    textAlign: 'left',
    padding: '10px'
    
  }
  
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'right',
    
    padding: '-30px'

  }

  const textColor={

  }
 */
export default Header;
