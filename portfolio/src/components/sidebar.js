import React, { Component } from "react";
import "../App.css";
import { Icon } from "antd";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul className="sidebar">
          <a href="#t1">
            <li className="symbol" id="uno">
              <Icon type="home" />
            </li>
          </a>
          <a href="#t2">
            <li className="symbol" id="dos">
              <Icon type="idcard" />
            </li>
          </a>
          <a href="#t3">
            <li className="symbol" id="tres">
              <Icon type="folder" />
            </li>
          </a>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
