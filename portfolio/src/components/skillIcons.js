import React, { Component } from "react";
import { List, Button } from "antd";

const iconInfo = require("../assets/data/iconInfo.json");
const resume = require("../assets/data/StevesResume.pdf");

class Skills extends Component {
  render() {
    return (
      <div className="skillsContainer">
        <div className="iconContainer">
          <List
            grid={{ column: 6 }}
            className="iconList"
            dataSource={iconInfo.frontEnd}
            renderItem={item => (
              <List.Item>
                <img
                  src={require("../assets/images/icons/" +
                    item.location +
                    ".png")}
                  alt=""
                />
                <div>{item.name}</div>
              </List.Item>
            )}
          />
          <List
            grid={{ gutter: 48, column: 3 }}
            className="iconList"
            dataSource={iconInfo.design}
            renderItem={item => (
              <List.Item className="designIcons">
                <img
                  src={require("../assets/images/icons/" +
                    item.location +
                    ".png")}
                  alt=""
                />
                <div>{item.name}</div>
              </List.Item>
            )}
          />
        </div>

        <span className="resumeContainer">
          <a href={resume} className="resume" download="StevenLeongResume">
            <Button
              type="primary"
              shape="round"
              icon="download"
              className="resumeBtn"
              size="large"
            >
              My Resume
            </Button>
          </a>
        </span>
      </div>
    );
  }
}

export default Skills;
