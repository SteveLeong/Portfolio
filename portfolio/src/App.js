import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="ct" id="t1">
        <div className="ct" id="t2">
          <div className="ct" id="t3">
            <div className="ct" id="t4">
              <section>
                <ul>
                  <a href="#t1">
                    <li className="icon fa fa-home" id="uno" />
                  </a>
                  <a href="#t2">
                    <li className="icon fa fa-keyboard-o" id="dos" />
                  </a>
                  <a href="#t3">
                    <li className="icon fa fa-coffee" id="tres" />
                  </a>
                  <a href="#t4">
                    <li className="icon fa fa-dribbble" id="cuatro" />
                  </a>
                </ul>
                <div className="page" id="p1">
                  <div className="icon fa fa-home" style={{ right: "0" }}>
                    <span className="title">Home</span>
                    <span className="hint">
                      Like this pen to see the magic!...
                      <br /> Just kidding, it won't happen anything but I'll be
                      really happy If you do so. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </span>
                  </div>
                </div>
                <div className="page" id="p2">
                  <li className="icon fa fa-keyboard-o">
                    <span className="title">Type</span>
                    <span className="hint">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </span>
                  </li>
                </div>
                <div className="page" id="p3">
                  <li className="icon fa fa-coffee">
                    <span className="title">Coffee</span>
                  </li>
                </div>
                <div className="page" id="p4">
                  <li className="icon fa fa-dribbble">
                    <span className="title">Dribbble</span>
                    <span className="hint" />
                  </li>
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
