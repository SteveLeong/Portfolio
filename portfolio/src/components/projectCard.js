import React, { Component } from "react";

import { Card, Modal, Row, Col } from "antd";
import "antd/dist/antd.css";
import "../styles/projectCard.css";
// import "../App.css";
const { Meta } = Card;

const modalStyle = {
  height: "75vh",
  padding: "0"
};

const DemoBox = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

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
          width="75%"
          style={{ borderRadius: "40px" }}
          bodyStyle={modalStyle}
          className="modal"
        >
          <div className="container">
            <Row className="row">
              <Col span={18} className="col" id="imageSpace">
                blah
              </Col>
              <Col span={6} className="col" id="infoSpace">
                col-6 col-pull-18
              </Col>
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectCard;
