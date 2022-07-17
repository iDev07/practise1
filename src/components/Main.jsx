import React from "react";
import logo from "../assets/f1.png";
import "./Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Main() {
  return (
    <div className="Main">
      <div className="container">
        <div className="corners">
          <div className="corner">
            <div className="top">
              <div className="left_cor"></div>
              <div className="top_cor"></div>
            </div>
            <div className="bottom">
              <div className="right_cor"></div>
              <div className="bottom_cor"></div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="left">
            <img src={logo} alt="logo" />
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="mailto:developerdiyorbek@gmail.com">
                  <FontAwesomeIcon
                    className="orangered"
                    icon={faEnvelope}
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="https://github.com/iDev07">
                  <FontAwesomeIcon
                    className="white"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/diyor_r1ch">
                  <FontAwesomeIcon
                    className="red"
                    icon={faInstagram}
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <div className="wrapper">
              <div className="welcome">
                <div class="patterns">
                  <svg width="100%" height="100%">
                    <rect
                      x="0"
                      y="0"
                      width="120%"
                      height="100%"
                      fill="url(#polka-dots)"
                    >
                      {" "}
                    </rect>

                    <text x="50%" y="60%" text-anchor="middle">
                      Welcome
                    </text>
                  </svg>
                </div>
              </div>
              <div className="me">
                <div className="left"></div>
                <div className="right">
                  <p>
                    My name is Ian Dunkerley, I'm a front-end developer based in
                    Torquay, Devon, UK. I have developed many types of
                    front-ends from well know DJ applications to Ecommerce
                    booking platforms.
                  </p>
                  <p>
                    I'm passionate about cutting-edge, pixel-perfect, beautiful
                    interfaces and intuitively implemented UX.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
