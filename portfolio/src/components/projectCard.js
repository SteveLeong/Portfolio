import React, { Component } from "react";

import { Card, Modal, Row, Col, Carousel, Button, Icon } from "antd";
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

  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }

  next = () => {
    this.carousel.next();
  };
  previous = () => {
    this.carousel.prev();
  };

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
        <div key="image">
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
            <Meta
              title={projectInfo.title}
              description={projectInfo.shortdesc}
            />
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
                <div className="carouselContainer">
                  <Icon
                    type="left"
                    onClick={this.previous}
                    className="leftIcon"
                    style={{ fontSize: "1.5em" }}
                  />
                  <Carousel ref={node => (this.carousel = node)}>
                    {this.displayImages(projectInfo.images)}
                  </Carousel>
                  <Icon
                    type="right"
                    onClick={this.next}
                    className="rightIcon"
                    style={{ fontSize: "1.5em" }}
                  />
                </div>
              </Col>
              <Col span={8} className="col" id="infoSpace">
                {/* Title, Description, Technologies */}
                <div className="projectInfo">
                  <h3>Title</h3>
                  <p>{projectInfo.title}</p>
                  <h3>Description</h3>
                  <p>{projectInfo.shortdesc}</p>
                  <h3>Technologies</h3>
                  <p>{projectInfo.technologies}</p>
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
