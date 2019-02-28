import React, { Component } from "react";

import { Icon, List } from "antd";
import Sidebar from "./components/sidebar";
import Projects from "./components/projects";
import Skills from "./components/skillIcons";

import "./assets/css/main.css";
import { relative } from "path";

class App extends Component {
  state = { numPages: null, pageNumber: 1 };

  render() {
    return (
      <div className="ct" id="t1">
        <div className="ct" id="t2">
          <div className="ct" id="t3">
            <div className="ct" id="t4">
              <section>
                <Sidebar />
                <div className="page" id="p1">
                  <div id="header">
                    <span className="avatar">
                      <img
                        src={require("./assets/images/profile.jp2")}
                        alt=""
                      />
                    </span>
                    <span className="title">Steven Leong</span>
                    <span className="hint">Web Developer</span>
                    <h1 className="header-desc">
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
                          className="icon style2"
                        >
                          <Icon type="github" />
                          <span className="label">Github</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/steven-leong/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon style2"
                        >
                          <Icon type="linkedin" />
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:steveleong8@gmail.com"
                          email="true"
                          className="icon style2"
                        >
                          <Icon type="mail" />
                          <span className="label">Email</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="page" id="p2">
                  {/* <div className="construction" />
                  <div id="header">
                    <span className="title">Under Construction!</span>
                    <span className="hint">
                      Sorry, I'm making improvments to this page!
                    </span>
                  </div> */}
                  <div className="headTitle">My Skills</div>
                  <Skills />
                </div>
                <div className="page" id="p3">
                  <Projects />
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
