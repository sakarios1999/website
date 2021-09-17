import React, { Component } from "react";
import Footer from "./Footer";
import NavbarComponent from "./Navbar";

import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarComponent />

        <main className="main-content">{this.props.children}</main>

        <Footer />
      </React.Fragment>
    );
  }
}
