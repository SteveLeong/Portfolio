import React, { Component } from "react";

import { Card } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;

class ProjectCard extends Component {
  render() {
    return (
      <Card
        bordered={false}
        style={{
          background: "transparent",
          padding: "5%",
          marginBottom: "10%",
          width: "90%"
        }}
        hoverable
      >
        <Card
          hoverable
          bordered={false}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Card>
    );
  }
}

export default ProjectCard;
