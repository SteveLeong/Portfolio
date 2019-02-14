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
    const { imageTitle } = this.props;
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
                src={
                  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                }
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
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
                <Carousel>
                  <div>
                    <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />{" "}
                  </div>
                  <div>
                    <img
                      src={require("../assets/resources/" +
                        imageTitle +
                        ".jpg")}
                      alt="blah"
                    />
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
              </Col>
              <Col span={8} className="col" id="infoSpace">
                {/* Title, Description, Technologies */}
                <div className="projectInfo">
                  <h2>Title</h2>
                  <p>Test</p>
                  <h2>Description</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris auctor imperdiet tincidunt. Nullam nec nulla tortor.{" "}
                  </p>
                  <h2>Technologies</h2>

                  <div className="text-center">
                    <Button
                      size="large"
                      className="btn"
                      href="https://github.com/SteveLeong"
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
