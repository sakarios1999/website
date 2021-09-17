import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Col, Container, Row } from "reactstrap";
import FAQAccordion from "../components/CustomComponents/Support-FAQAccordion/FAQAccordion";
import "./styles/Support.css";
export default class Support extends Component {
  render() {
    return (
      <Container className="Support" fluid>
        <Row>
          <Col xs={12} className="Support-Header">
            <h2>SEARCHING FOR HELP?</h2>
            <p>Sign Up for texts and support:</p>
            <p>
              Text '<span>TYC</span>' to <span>59916</span>
            </p>
            <p>Email us: support@tyc.co</p>
            <p>DM us on Instagram:@tyc </p>
          </Col>
        </Row>
        <Row className="Support-TutorialSection">
          <Col className="Support-VideoTutorial" md={3}>
            {" "}
            <ReactPlayer
              width="100%"
              height="70%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <p>How to activate your Tyc</p>
          </Col>
          <Col className="Support-VideoTutorial" md={3}>
            {" "}
            <ReactPlayer
              width="100%"
              height="70%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <p>How to pop an iPhone</p>
          </Col>
          <Col className="Support-VideoTutorial" md={3}>
            {" "}
            <ReactPlayer
              width="100%"
              height="70%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
            <p>How to pop an Android</p>
          </Col>
          <Col className="Support-VideoTutorial" md={3}>
            {" "}
            <ReactPlayer
              width="100%"
              height="70%"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />{" "}
            <p>Tyc Pro</p>
          </Col>
        </Row>
        <Row className="Support-FAQ">
          <Col xs={12}>
            <FAQAccordion
              title="Troubleshooting TYC"
              CardBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci voluptatem esse, doloremque necessitatibus molestiae itaque fuga praesentium consequatur ea aspernatur laborum cumque iusto earum ipsam placeat quae dolorem neque."
            />
          </Col>
          <Col xs={12}>
            <FAQAccordion
              title="General"
              CardBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci voluptatem esse, doloremque necessitatibus molestiae itaque fuga praesentium consequatur ea aspernatur laborum cumque iusto earum ipsam placeat quae dolorem neque."
            />
          </Col>
          <Col xs={12}>
            <FAQAccordion
              title="Compatibility"
              CardBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci voluptatem esse, doloremque necessitatibus molestiae itaque fuga praesentium consequatur ea aspernatur laborum cumque iusto earum ipsam placeat quae dolorem neque."
            />
          </Col>
          <Col xs={12}>
            <FAQAccordion
              title="Shipping"
              CardBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci voluptatem esse, doloremque necessitatibus molestiae itaque fuga praesentium consequatur ea aspernatur laborum cumque iusto earum ipsam placeat quae dolorem neque."
            />
          </Col>
          <Col xs={12}>
            <FAQAccordion
              title="TYC App Help"
              CardBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci voluptatem esse, doloremque necessitatibus molestiae itaque fuga praesentium consequatur ea aspernatur laborum cumque iusto earum ipsam placeat quae dolorem neque."
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
