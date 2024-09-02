import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
          loremloremloremloremloremloremlorem
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="iconfacebook" />
            <img src={assets.twitter_icon} alt="icontwitter" />
            <img src={assets.linkedin_icon} alt="iconlinkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+0201020022885</li>
            <li>mahmoudEltaweel@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right"> copyright 2024 tomato.com </p>
    </div>
  );
}
