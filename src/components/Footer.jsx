import React from "react";
import { isMobile } from "react-device-detect";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
  FaRedditSquare,
} from "react-icons/fa";

var Footer = () => {
  if (isMobile) {
    return (
      <div>
        <div className="footer-mobile">
          <div className="footer-mobile-allign">
            <p>Wanna get in touch?</p>
            <a
              target="_blank" rel="noreferrer"
              href="mailto:javvajiharshavardhan.24@protonmail.com"
            >
              <button type="button" className="btn footer-btn">
                Email me
              </button>
            </a>
          </div>
          <div className="icons-mobile">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/harshavardh_a_n"
            >
              <FaTwitterSquare color="#00aced" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/harsha-vardhan-8511721b2/"
            >
              <FaLinkedin color="#0e76a8" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Harsha-Vardhan-24"
            >
              <FaGithubSquare color="#171515" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.reddit.com/user/coding_owl"
            >
              <FaRedditSquare color="#ff4500" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/harshavardhan.24/"
            >
              <FaInstagramSquare color="#800080" />
            </a>
          </div>
          <p>Made by Harsha Vardhan</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="footer-desktop">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>Wanna get in touch?</p>
                <a href="mailto:javvajiharshavardhan.24@protonmail.com">
                  <button type="button" className="btn footer-btn">
                    EMAIL ME
                  </button>
                </a>
              </div>
              <div className="col-md-6">
                <div className="icons-desktop">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/harshavardh_a_n"
                  >
                    <FaTwitterSquare color="#00aced" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/harsha-vardhan-8511721b2/"
                  >
                    <FaLinkedin color="#0e76a8" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Harsha-Vardhan-24"
                  >
                    <FaGithubSquare color="#171515" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.reddit.com/user/coding_owl"
                  >
                    <FaRedditSquare color="#ff4500" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/harshavardhan.24/"
                  >
                    <FaInstagramSquare color="#800080" />
                  </a>
                </div>
              </div>
              <p className="footer-end-text">Made by Harsha Vardhan</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
