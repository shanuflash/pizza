import React, { Component } from "react";
import "./Master.css";

export class Master extends Component {
  render() {
    return (
      <div className="big-main">
        <div className="big-text">
          Buy now <br /> 50% offer
        </div>
        <img
          className="big-img"
          src="https://o.remove.bg/downloads/d710f57c-fe45-4fe4-ae5c-9f317daa7f46/image-removebg-preview.png"
          alt="pizza"
        />
      </div>
    );
  }
}

export default Master;
