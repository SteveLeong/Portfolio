import React, { Component } from "react";

import { Card, Modal, Row, Col, Carousel, Button, Icon, Popover } from "antd";
import "antd/dist/antd.css";
// import "../assets/css/projectCard.css";
import "../assets/css/main.css";

const { Meta } = Card;

const modalStyle = {
  height: "75vh",
  padding: "0"
};

class ProjectCard extends Component {
  state = { visible: false, hover: false };

  constructor(props) {
    super(props);
    this.carousel = React.createRef();
  }

  demoBtn = demoLink => {
    return (
      <Button size="large" className="btn" href={demoLink} target="_blank">
        Demo
      </Button>
    );
  };

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
    this.setState({
      visible: false
    });
    // this.carousel.goTo(0, true);
  };

  handleHoverChange = show => {
    this.setState({
      hover: show
    });
  };

  displayImages = props => {
    return props.map(image => {
      return (
        <div key="image" className="imageContainer">
          <img
            src={require("../assets/images/projectImages/" + image + ".jp2")}
            alt="blah"
          />
        </div>
      );
    });
  };

  render() {
    const { projectInfo } = this.props;
    const hoverContent = <div>Unavaiable due to client request</div>;
    return (
      <div className="projectCard">
        <Card
          className="outerCard"
          bordered={false}
          style={{}}
          hoverable
          onClick={this.showModal}
        >
          <Card
            className="innerCard"
            hoverable
            bordered={false}
            cover={
              <img
                alt={projectInfo.images[0]}
                src={require("../assets/images/thumbs/" +
                  projectInfo.images[0] +
                  ".jp2")}
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
          className="modal"
        >
          <div className="container">
            <Row className="row">
              <Col md={24} lg={16} className="imageSpace">
                <div className="carouselContainer">
                  <Icon
                    type="left"
                    onClick={this.previous}
                    className="slideArrows leftIcon"
                  />
                  <Carousel ref={node => (this.carousel = node)}>
                    {this.displayImages(projectInfo.images)}
                  </Carousel>
                  <Icon
                    type="right"
                    onClick={this.next}
                    className="slideArrows rightIcon"
                  />
                </div>
              </Col>
              <Col md={24} lg={8} className="infoSpace">
                {/* Title, Description, Technologies */}
                <div className="projectInfo">
                  <h3>Title</h3>
                  <p style={{ fontSize: "3vh" }}>{projectInfo.title}</p>
                  <h3>Description</h3>
                  <p>{projectInfo.description}</p>
                  <h3>Technologies</h3>
                  <p>{projectInfo.technologies}</p>
                  <div className="text-center">
                    <Popover
                      content={hoverContent}
                      trigger="hover"
                      placement="bottom"
                      visible={this.state.hover}
                      onVisibleChange={
                        projectInfo.github === "unavailable"
                          ? this.handleHoverChange
                          : ""
                      }
                    >
                      <Button
                        size="large"
                        className="btn"
                        href={projectInfo.github}
                        disabled={
                          projectInfo.github === "unavailable" ? true : false
                        }
                        target="_blank"
                      >
                        Github
                      </Button>
                      {projectInfo.demo !== ""
                        ? this.demoBtn(projectInfo.demo)
                        : ""}
                    </Popover>
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
