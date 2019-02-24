import React, { Component } from "react";
import "../assets/css/main.css";
import { Icon } from "antd";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul className="sidebar">
          <li className="symbol" id="uno">
            <a href="#t1">
              <Icon type="home" />
            </a>
          </li>

          <li className="symbol" id="dos">
            <a href="#t2">
              <Icon type="idcard" />
            </a>
          </li>

          <li className="symbol" id="tres">
            <a href="#t3">
              <Icon type="folder" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
