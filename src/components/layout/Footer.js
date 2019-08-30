import React, { Component, Fragment } from "react";
import { decorator } from "@babel/types";

export default function Footer() {
  return (
    <Fragment>
      <div className="container">
        <div
          className="footer-copyright text-center py-3 bg-primary"
          style={footerStyle}
        >
          <p className="text-center" style={textC}>
            © Copyright 2019 qasims.dev@gmail.com
          </p>
        </div>
      </div>
    </Fragment>
  );
}

const footerStyle = {
  border: "none",
  height: "60px",
  background: "grey"
};

const textC = {
  color: "white"
};
