import React, { Component } from "react";

import { Card, Modal } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;

class ProjectCard extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  //   handleOk = e => {
  //     console.log(e);
  //     this.setState({
  //       visible: false
  //     });
  //   };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Card
          bordered={false}
          style={{
            background: "transparent",
            padding: "5%",
            marginBottom: "10%",
            width: "90%"
          }}
          hoverable
          onClick={this.showModal}
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
        <Modal
          title="Basic Modal"
          centered
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default ProjectCard;
