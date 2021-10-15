import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import ProfilePic from "../assets/Images/Profile-Placeholder.png";
import TYCLogo from "../assets/SVGs/TYCLogo.svg";
import "./styles/WelcomePage.css";
const Heart = styled(BsHeart)`
  transform: scale(6);
  margin: 2rem 0rem;
  color: rgb(211, 0, 214);
`;
export default class WelcomePage extends Component {
  render() {
    return (
      <Container className="Welcome" fluid>
        <Helmet>
          <title>TYC - Welcome Back</title>
        </Helmet>
        <Row>
          <Col className="Welcome-Header" xs={12}>
            <img className="Welcome-Header__Img" src={TYCLogo} alt="TYC Logo" />
            <h3 className="Welcome-Header__Title">Welcome Back</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="Welcome-Profile">
            <img className="Welcome-Profile__Pic" src={ProfilePic} alt="" />
            <h3 className="Welcome-Profile__Name">John Doe</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="Welcome-Account">
            <p>Not you? </p>
            <Link className="Welcome-Account__SignOut" to="/SignIn">
              Change Account
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="Welcome-Continue">
            <IconContext.Provider
              value={{
                color: "rgb(211, 0, 214)",
              }}
            >
              <Heart />
            </IconContext.Provider>
            <button
              onClick={() => (window.location.href = "/Profile/EditInfo")}
              className="Welcome-Continue__Btn"
            >
              Continue
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}
