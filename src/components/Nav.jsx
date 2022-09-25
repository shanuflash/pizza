import React, { Component } from "react";
import "./Nav.css";

export class Nav extends Component {
  render() {
    return (
      <div class="navbar">
        <a className="active" href="#Home">
          Home
        </a>
        <a href="#Order">Order</a>
        <a href="#About">About</a>
      </div>
    );
  }
}

export default Nav;
