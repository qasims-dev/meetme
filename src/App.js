import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import EditProfilePage from "./components/EditProfilePage";
import LogoutPage from "./components/LogoutPage";
import AddFriend from "./components/AddFriend";
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
          <div className="container">
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
            <Route exact path="/EditProfile" component={EditProfilePage} />

            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
