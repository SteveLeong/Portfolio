import React, { Component } from "react";

import { Card, Row, Col } from "antd";
import Sidebar from "./components/sidebar";
import ProjectCard from "./components/projectCard";

import "./App.css";
import "./assets/css/main.css";
class App extends Component {
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
                      <img src={require("./images/profile.jpg")} alt="" />
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
                          className="icon style2 fa-github"
                        >
                          <span className="label">Github</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/steven-leong-348600154/"
                          target="_blank"
                          className="icon style2 fa-linkedin"
                        >
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:steveleong8@gmail.com"
                          email
                          className="icon style2 fa-envelope-o"
                        >
                          <span className="label">Email</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="page" id="p2">
                  <div className="symbol">
                    {/* <Icon type="idcard" /> */}
                    <span className="title">About Me</span>
                    <span className="hint">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </span>
                  </div>
                </div>
                <div className="page" id="p3">
                  <span className="headTitle">Projects</span>
                  <div className="content">
                    <Row gutter={16}>
                      <Col span={8}>
                        <ProjectCard imageTitle="mid-image" />
                      </Col>
                      {/* <Col span={8}>
                        <ProjectCard />
                      </Col>
                      <Col span={8}>
                        <ProjectCard />
                      </Col>
                      <Col span={8}>
                        <ProjectCard />
                      </Col>
                      <Col span={8}>
                        <ProjectCard />
                      </Col>
                      <Col span={8}>
                        <ProjectCard />
                      </Col> */}
                    </Row>
                  </div>
                </div>
                <div className="page" id="p4">
                  <div className="symbol fa fa-dribbble">
                    <span className="title">Dribbble</span>
                    <span className="hint" />
                  </div>
                </div>
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
