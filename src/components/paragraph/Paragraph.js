import React from "react";
import "./paragraphStyle.css";
import { Link } from "react-router-dom";
export default function Paragraph() {
  return (
    <div>
      <div className="container w-75">
        <div className="row">
          <p className="paragraph mx-auto ">
            Build a Sign in Page to display your command on &nbsp;&nbsp;
            bootstrap
            <span className="text-danger">:text with color red</span>
            &nbsp;pseudo-element.
            <Link to="https://www.google.com" className="text-decoration-none">
              &nbsp; Works in latest chrome,safari and Firefox.This is clickable
              section that wil take us to a new page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
