import React from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
import itmlog from "../../assets/itmlogo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <img src={itmlog} className="logo" />
          <p>
            At BridgeConnect, we hire detail - <br />
            oriented people who strive to provide our clients with the best
            assisstance on the planet
          </p>
        </div>
        <div className="col">
          <h3>
            Office{" "}
            <div className="underline">
              {" "}
              <span></span>
            </div>
          </h3>
          <p>PU-4 Behind Orbit Mall, Vijay Nagar, </p>

          <p>Indore, Madhya Pradesh 452001</p>
          <p className="email-id">info@bridgeconnectsolutions.com</p>
          <h4>+91 - 8319137519</h4>
        </div>
        <div className="col">
          <h3>
            Links{" "}
            <div className="underline">
              {" "}
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="/">For Companies </a>
            </li>
            <li>
              <a href="/service">For Talents</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Newsroom</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Newsletter{" "}
            <div className="underline">
              {" "}
              <span></span>
            </div>
          </h3>
          <form>
            <i class="far fa-envelope"></i>
            <input type="email" placeholder="Enter your email id" required />
            <button type="submit" className="submit">
              <i class="fas fa-arrow-right"></i>
            </button>
          </form>
          <div className="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="copyright">Brigde Connect © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
