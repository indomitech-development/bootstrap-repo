import React from "react";
import "./formStyle.css";
export default function Form() {
  return (
    <div>
      <div className="data">
        <div className="container mx-auto">
          <div className="row">
            <div class="form-floating mb-3 ">
              <input
                type="email"
                class="form-control w-50"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating ">
              <input
                type="password"
                class="form-control w-50"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
