import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Intrests from "./components/Intrests";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AddProjects from "./components/Add_Projects";

var App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Header />
              <Intrests />
              <Projects />
              <Footer />
            </Fragment>
          }
        />
        <Route path="/add-project" element={<AddProjects />} />
      </Routes>
    </div>
  );
};

export default App;
