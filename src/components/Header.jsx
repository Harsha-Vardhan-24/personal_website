import { React } from "react";
import { isMobile } from "react-device-detect";

var Header = () => {
  if (isMobile) {
    return (
      <div>
        <nav className="navbar mobile-header text-center">
          <span className="navbar mb-0 h1 fs-1">HV</span>
        </nav>
        <div className="main-img-mobile">
          <h1 className="head-text-mobile">
            Hello people, Myself Harsha Vardhan,
            <br /> A full-stack web developer.
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="navbar header">
          <span className="navbar mb-0 h1 fs-3">Harsha Vardhan</span>
          <a href="mailto:javvajiharshavardhan.24@protonmail.com">
            <button type="button" className="btn navbar-btn">
              EMAIL ME
            </button>
          </a>
        </nav>
        <div className="main-img">
          <h1 className="head-text">
            Hello people, Myself Harsha Vardhan,
            <br /> A full-stack web developer.
          </h1>
        </div>
      </div>
    );
  }
};

export default Header;
