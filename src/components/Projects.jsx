// eslint-disable-next-line
import { React, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

var Projects = () => {
  const [projectData, setProjectData] = useState();

  useEffect(() => {
    fetch("https://personal-website-bk.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  if (isMobile) {
    return (
      <div>
        {projectData?.map((project) => {
          return (
            <div className="project-overview">
              <h3 key={project._id}>{project.Title}</h3>
              <p>
                <span className="project-title-highlight">Description: </span>
                {project.Description}
              </p>
              <p>
                <span className="project-title-highlight">Tech Stack: </span>
                {project.Tech_Stack}
              </p>
              <div className="text-center">
                <a target="_blank" rel="noreferrer" href={project.Link}>
                  <button type="button" className="btn project-btn">
                    Link
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <div className="row">
            {projectData?.map((project) => {
              return (
                <div className="col-md-4 project-overview-desktop">
                  <h3 key={project._id}>{project.Title}</h3>
                  <p>
                    <span className="project-title-highlight">Description</span>
                    : {project.Description}
                  </p>
                  <p>
                    <span className="project-title-highlight">Tech Stack</span>:
                    {project.Tech_Stack}
                  </p>
                  <div className="text-center">
                    <a target="_blank" rel="noreferrer" href={project.Link}>
                      <button type="button" className="btn project-btn-desktop">
                        Link
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Projects;
