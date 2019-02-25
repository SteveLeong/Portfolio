import React, { Component } from "react";
import ProjectCard from "./projectCard";
import { Row, Col } from "antd";

import "../assets/css/main.css";

const projectData = require("../assets/data/projectInfo.json");

class Projects extends Component {
  showProjects = props => {
    return props.projects.map(project => {
      // console.log(project);
      return (
        <Col xs={24} sm={24} md={12} lg={8} key={project.id}>
          <ProjectCard projectInfo={project} />
        </Col>
      );
    });
  };

  render() {
    return (
      <div>
        <span className="headTitle">My Projects</span>
        <div className="projectContent">
          <Row gutter={16}>{this.showProjects(projectData)}</Row>
        </div>
      </div>
    );
  }
}

export default Projects;
