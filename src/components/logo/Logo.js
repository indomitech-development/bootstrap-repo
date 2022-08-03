import React from "react";
import logo from "../../assets/images/img_bootstrap.png";
import "./logoStyle.css";
export default function Logo() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <img src={logo} className="w-25 h-25 mx-auto" />
        </div>
      </div>
    </div>
  );
}
