import React, { Component } from "react";

import { Card, Modal, Row, Col, Carousel, Button } from "antd";
import "antd/dist/antd.css";
import "../styles/projectCard.css";
// import "../App.css";
const { Meta } = Card;

const modalStyle = {
  height: "75vh",
  padding: "0"
};

class ProjectCard extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  displayImages = props => {
    return props.map(image => {
      return (
        <div>
          <img
            src={require("../images/projectImages/" + image + ".jpg")}
            alt="blah"
          />
        </div>
      );
    });
  };

  render() {
    const { projectInfo } = this.props;
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
                src={require("../images/projectImages/" +
                  projectInfo.images[0] +
                  ".jpg")}
              />
            }
          >
            <Meta title={projectInfo.title} description="www.instagram.com" />
          </Card>
        </Card>
        <Modal
          centered
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
          width="65%"
          style={{ borderRadius: "40px" }}
          bodyStyle={modalStyle}
          className="modal"
        >
          <div className="container">
            <Row className="row">
              <Col span={16} className="col" id="imageSpace">
                {/* Carousel */}
                <Carousel>{this.displayImages(projectInfo.images)}</Carousel>
              </Col>
              <Col span={8} className="col" id="infoSpace">
                {/* Title, Description, Technologies */}
                <div className="projectInfo">
                  <p>Title</p>
                  <h2>{projectInfo.title}</h2>
                  <p>Description</p>
                  <h2>{projectInfo.desc}</h2>
                  <p>Technologies</p>
                  <h2>{projectInfo.technologies}</h2>
                  <div className="text-center">
                    <Button
                      size="large"
                      className="btn"
                      href={projectInfo.github}
                      target="_blank"
                    >
                      Github
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectCard;
