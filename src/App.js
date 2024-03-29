import React, { Component } from "react";
//import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import EditProfilePage from "./components/EditProfilePage";
import LogoutPage from "./components/LogoutPage";
import AddFriend from "./components/AddFriend";
import Contacts from "./components/Contacts";
import Admin from "./components/Admin";
import AdminPage from "./components/AdminPage";
import ResetPassword from "./components/ResetPassword";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  /*   componentDidMount() {
    let loginObj = { user: "user@user.com", authStatus: 0 };
    localStorage.setItem("authInfo", JSON.stringify(loginObj));
  } */
  /* let loginObj = { user: "user@user.com", authStatus: 1 };
  localStorage.setItem("authInfo", JSON.stringify(loginObj));
   */
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/">
            <React.Fragment />
          </Route>
          <Route exact path="/" component={LoginPage} />

          <Route exact path="/loginPage" component={LoginPage} />
          <Route exact path="/signupPage" component={SignupPage} />
          <Route exact path="/ProfilePage" component={ProfilePage} />
          <Route exact path="/LogoutPage" component={LogoutPage} />
          <Route exact path="/AddFriend" component={AddFriend} />
          <Route exact path="/Contacts" component={Contacts} />
          <Route exact path="/EditProfile" component={EditProfilePage} />
          <Route exact path="/Admin" component={Admin} />
          <Route exact path="/AdminPage" component={AdminPage} />
          <Route exact path="/ResetPassword" component={ResetPassword} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
