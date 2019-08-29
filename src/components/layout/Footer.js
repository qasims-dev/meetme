import React, { Component, Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <footer class="py-5 bg-black">
        <div class="container">
          <p class="m-0 text-center text-white small">
            © Copyright 2019 qasims.dev@gmail.com
          </p>
        </div>
      </footer>
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-text">
            <div className="container-fluid text-center text-md-left">
              <div className="footer-copyright text-center py-3">
                <p className="text-center text-muted">
                  © Copyright 2019 qasims.dev@gmail.com
                </p>
              </div>
            </div>
          </span>
        </nav>
      </div>
    </Fragment>
  );
}
