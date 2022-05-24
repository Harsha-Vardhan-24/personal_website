import { React, useState } from "react";
import { isMobile } from "react-device-detect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

var Add_Projects = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    tech_stack: "",
    link: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function notification() {
    toast.success('Success 😊', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  function Handleform(e) {
    e.preventDefault();
    notification()
    fetch("https://personal-website-bk.herokuapp.com/back-end", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }

  if(isMobile) {
    return(
      <div className="text-center">
      <nav className="header-nav">
        <h1>HV</h1>
      </nav>
      <form>
        <h1 className="project-update-text">
          Please Enter the following details
        </h1>
        <div className="form-group">
          <input
            type="text"
            name="title"
            value={projectData.title}
            onChange={handleChange}
            className="form-control input-box"
            placeholder="Title"
          />
          <textarea
            type="text"
            name="description"
            value={projectData.description}
            onChange={handleChange}
            className="form-control input-box"
            rows="2"
            placeholder="Description"
          />
          <input
            type="text"
            name="tech_stack"
            value={projectData.tech_stack}
            onChange={handleChange}
            className="form-control input-box"
            placeholder="Tech Stack"
          />
          <input
            type="link"
            name="link"
            value={projectData.link}
            onChange={handleChange}
            className="form-control input-box"
            placeholder="Link"
          />
        </div>
        <button onClick={Handleform} type="submit" className="submit-btn">
          Submit
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
    )
  } else {
    return(
      <div className="text-center">
      <nav className="header-nav-desktop">
        <h1>HV</h1>
      </nav>
      <form>
        <h1 className="project-update-text">
          Please Enter the following details
        </h1>
        <div className="form-group">
          <input
            type="text"
            name="title"
            value={projectData.title}
            onChange={handleChange}
            className="form-control input-box"
            placeholder="Title"
          />
          <textarea
            type="text"
            name="description"
            value={projectData.description}
            onChange={handleChange}
            className="form-control input-box"
            rows="2"
            placeholder="Description"
          />
          <input
            type="text"
            name="tech_stack"
            value={projectData.tech_stack}
            onChange={handleChange}
            className="form-control input-box"
            placeholder="Tech Stack"
          />
          <input
            type="link"
            name="link"
            value={projectData.link}
            onChange={handleChange}
            className="form-control input-box"
            placeholder="Link"
          />
        </div>
        <button onClick={Handleform} type="submit" className="submit-btn">
          Submit
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
    )
  }
};

export default Add_Projects;
