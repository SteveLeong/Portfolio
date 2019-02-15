import React, { Component } from "react";

function projects(props) {
  props.projects.forEach(project => {
    return <ProjectCard projectInfo={project} />;
  });
}

class showProjects extends Component {
  render() {
    return <projects projectInfo={project} />;
  }
}

export default showProjects;
