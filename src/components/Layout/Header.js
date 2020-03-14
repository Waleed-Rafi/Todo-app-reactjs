import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <h1> TodoList </h1>{" "}
          <Link style={linkStyle} to="/">
            Home
          </Link>{" "}
          |{" "}
          <Link style={linkStyle} to="/about">
            About
          </Link>
        </header>{" "}
      </div>
    );
  }
}
const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};
export default Header;
