import React, { Component } from "react";
import "./App.css";
import { Icon, Card, Row, Col } from "antd";
import Sidebar from "./components/sidebar";
import ProjectCard from "./components/projectCard";

const gridStyle = {
  width: "25%",
  textAlign: "center"
};

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
                  <div className="icon" style={{ right: "0" }}>
                    <Icon type="home" />
                    <span className="title">Steven Leong</span>
                    <span className="hint">An Aspiring Web Developer</span>
                  </div>
                </div>
                <div className="page" id="p2">
                  <div className="icon">
                    <Icon type="idcard" />
                    <span className="title">Type</span>
                    <span className="hint">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </span>
                  </div>
                </div>
                <div className="page" id="p3">
                  <div className="content">
                    <Row gutter={16}>
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
                      </Col>
                      <Col span={8}>
                        <ProjectCard />
                      </Col>
                      <Col span={8}>
                        <ProjectCard />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="page" id="p4">
                  <div className="icon fa fa-dribbble">
                    <span className="title">Dribbble</span>
                    <span className="hint" />
                  </div>
                </div>
                <p className="credit">
                  {" "}
                  Original Pen by{" "}
                  <a href="https://codepen.io/hrtzt/">Alberto Hartzet</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
