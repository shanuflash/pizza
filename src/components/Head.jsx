import React, { Component } from "react";
import "./Head.css";

export class Head extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img
            src="https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png"
            alt="pizza logo"
          />
        </div>
        <div class="head-nav">
          <a href="#Login">Login</a>
          <div className="divider"></div>
          <a href="#Register">Register</a>
        </div>
      </div>
    );
  }
}

export default Head;
