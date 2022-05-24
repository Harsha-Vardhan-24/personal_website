import React from "react";
import { isMobile } from "react-device-detect";

var Intrests = (props) => {
  if (isMobile) {
    return (
      <div>
        <div className="header-text-head-mobile">
          <h1>About</h1>
          <p>
            I am a full-stack web developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="header-text-head-mobile">
          <h1>Intrests</h1>
          <p>
            Video games, Outdoor sports, Reader, Reddit, Designing, Fitness,
            Football, Coding.
          </p>
        </div>
        <div className="header-text-head-mobile">
          <h1>Projects</h1>
          <p>Here are some of the projects that I have made myself.</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 desktop-content-header">
              <h1>About</h1>
              <p>
                I am a full-stack web developer with a particular interest in
                making things simple and automating daily tasks. I try to keep
                up with security and best practices, and am always looking for
                new things to learn.
              </p>
            </div>
            <div className="col-md-6 desktop-content-header">
              <h1>Intrests</h1>
              <p>
                Video games, Outdoor sports, Reader, Reddit, Designing, Fitness,
                Football, Coding.
              </p>
            </div>
            <div className="col desktop-content-header">
              <h1>Projects</h1>
              <p>Here are some of the projects that I have made myself.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Intrests;
