import React, { useState } from "react";
import "./loginpopup.css";
import { assets } from "../../assets/assets";

export default function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" ? (
            <>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input
                type="password"
                placeholder="Your password"
                required
              />{" "}
            </>
          ) : (
            <>
              <input type="email" placeholder="Your Email" required />
              <input type="password" placeholder="Your password" required />
            </>
          )}
        </div>
        <button>{currState === "Sigun Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to thr terms of use & privacy policy</p>
        </div>
        {currState === "Sign Up" ? (
          <p>
            Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span>
          </p>
        ) : (
          <p>
            Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
}
