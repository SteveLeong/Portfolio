import React, { Component } from "react";

import { Row, Col } from "antd";
import Sidebar from "./components/sidebar";
import ProjectCard from "./components/projectCard";

import "./App.css";
import "./assets/css/main.css";

const test = require("./data/projectInfo.json");

class App extends Component {
  state = { numPages: null, pageNumber: 1 };

  showProjects = props => {
    return props.projects.map(project => {
      // console.log(project);
      return (
        <Col span={8}>
          <ProjectCard projectInfo={project} />
        </Col>
      );
    });
  };

  render() {
    return (
      <div className="ct" id="t1">
        <div className="ct" id="t2">
          <div className="ct" id="t3">
            <div className="ct" id="t4">
              <section>
                <Sidebar />
                <div className="page" id="p1">
                  {/* <div className="icon" style={{ right: "0" }}> */}
                  {/* <Icon type="home" /> */}
                  <div id="header">
                    <span className="avatar">
                      <img src={require("./images/profile.jp2")} alt="" />
                    </span>
                    <span className="title">Steven Leong</span>
                    <span className="hint">Web Developer</span>
                    <h1>
                      <strong>Passionate</strong> about building{" "}
                      <strong>excellent</strong> software that <br /> improves
                      the lives of those around me.
                    </h1>
                    <ul className="icons">
                      <li>
                        <a
                          href="https://github.com/SteveLeong"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon style2 fa-github"
                        >
                          <span className="label">Github</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/steven-leong/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon style2 fa-linkedin"
                        >
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:steveleong8@gmail.com"
                          email="true"
                          className="icon style2 fa-envelope-o"
                        >
                          <span className="label">Email</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="page" id="p2">
                  <div className="construction" />
                  {/* <Icon type="idcard" /> */}
                  <div className="symbol">
                    <span className="title">Under Construction!</span>
                    <span className="hint">
                      Sorry, I'm making improvments to this page!
                    </span>
                  </div>
                </div>
                <div className="page" id="p3">
                  <span className="headTitle">My Projects</span>
                  <div className="content">
                    <Row gutter={16}>{this.showProjects(test)}</Row>
                  </div>
                </div>
                {/* <div className="page" id="p4">
                  <div className="symbol fa fa-dribbble">
                    <span className="title">Dribbble</span>
                    <span className="hint" />
                  </div>
                </div> */}
                <p className="credit" />
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
