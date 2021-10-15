import React, { Component } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Col, Container, NavLink, Row } from "reactstrap";
import styled from "styled-components";
import AppleLogo from "../assets/SVGs/AppleLogo.svg";
import GoogleLogo from "../assets/SVGs/GooglePlayLogo.svg";
import TYCLogo from "../assets/SVGs/TYCLogo-Footer.svg";
import DELogo from "../assets/Images/DE-Logo.png";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    const LinkedIn = styled(FaLinkedinIn)`
      color: #fff;
      transform: scale(1.5);
      margin-left: 1rem;
    `;
    const Instagram = styled(FaInstagram)`
      color: #fff;
      transform: scale(1.5);
      margin-left: 1rem;
    `;
    const Facebook = styled(FaFacebook)`
      color: #fff;
      transform: scale(1.5);
      margin-left: 1rem;
    `;

    return (
      <Container className="Footer-Container" fluid>
        <Row>
          <Col
            md={{ size: 4, offset: 0 }}
            sm={{ size: 8, offset: 2 }}
            className="Footer-Main"
          >
            <div className="Footer-Info">
              <img className="Footer-Logo" src={TYCLogo} alt="" />

              <div className="Footer-Address">
                <p>San Diego, California</p>
                <p>United States of America</p>
                <p>info@tapyourchip.com</p>
                <p>858.449.8059</p>
              </div>
            </div>
          </Col>
          <Col md={{ size: 4, offset: 0 }} sm={{ size: 8, offset: 2 }}>
            <div className="Footer-QuickLinks">
              <Row>
                <h4 className="Footer-Title">Quick Links</h4>
              </Row>
              <Row fluid={true}>
                <div className="Footer-Link__Container">
                  <Col md="5" className="xs-p-0">
                    <ul className="Footer-Link__List">
                      <li className="Footer-Link__Item">
                        <NavLink className="Footer-Link__Item" href="/">
                          Home
                        </NavLink>
                      </li>
                      <li className="Footer-Link__Item">
                        <NavLink
                          className="Footer-Link__Item"
                          href="/#HowItWorks"
                        >
                          How it Works
                        </NavLink>
                      </li>
                      <li className="Footer-Link__Item">
                        <NavLink
                          className="Footer-Link__Item"
                          href="/#Features"
                        >
                          Features
                        </NavLink>
                      </li>
                      <li className="Footer-Link__Item">
                        <NavLink className="Footer-Link__Item" href="/Shop">
                          Products
                        </NavLink>
                      </li>
                      <li className="Footer-Link__Item">
                        <NavLink className="Footer-Link__Item" href="/#Form">
                          Distributors
                        </NavLink>
                      </li>
                      <li className="Footer-Link__Item">
                        <NavLink className="Footer-Link__Item" href="/">
                          Sign In
                        </NavLink>
                      </li>
                    </ul>
                  </Col>
                  <Col md="6">
                    <ul className="Footer-Link__List">
                      <li className="Footer-Link__Item">
                        <Link className="Footer-Link__Item" to="/about">
                          TYC Cards & Stickers
                        </Link>
                      </li>
                      <li className="Footer-Link__Item">
                        <Link className="Footer-Link__Item" to="/about">
                          TYC Phone Cases
                        </Link>
                      </li>
                      <li className="Footer-Link__Item">
                        <Link
                          className="Footer-Link__Item"
                          to="/Privacy-Policy"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="Footer-Link__Item">
                        <Link
                          className="Footer-Link__Item"
                          to="/Terms&Conditions"
                        >
                          Terms of Use
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </div>
              </Row>
            </div>
          </Col>
          <Col md={{ size: 3, offset: 1 }} sm={{ size: 8, offset: 2 }}>
            <div className="Footer-Download">
              <Row>
                <h4 className="Footer-Title">Download</h4>
              </Row>
              <Row>
                <div className="Footer-Store__Links">
                  <Link className="Footer-Store__Btns" to="/">
                    <img className="Google" src={GoogleLogo} alt="" />
                  </Link>
                  <Link className="Footer-Store__Btns" to="/">
                    <img className="Apple" src={AppleLogo} alt="" />
                  </Link>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="Footer-SocialMedia">
          <Col
            xs={{ size: 12, offset: 0 }}
            md={{ size: 11, offset: 1 }}
            className="p-0 Footer-SocialMedia__Container"
          >
            <NavLink href="/" className="p-0 Footer-SocialMedia__Link">
              <IconContext.Provider value={{ color: "white" }}>
                {" "}
                <LinkedIn />
              </IconContext.Provider>
            </NavLink>
            <NavLink href="/" className="p-0 Footer-SocialMedia__Link">
              <IconContext.Provider value={{ color: "white" }}>
                {" "}
                <Instagram />
              </IconContext.Provider>
            </NavLink>
            <NavLink href="/" className="p-0 Footer-SocialMedia__Link">
              {" "}
              <IconContext.Provider value={{ color: "white" }}>
                {" "}
                <Facebook />
              </IconContext.Provider>
            </NavLink>
          </Col>
        </Row>
        <Row className="Footer-Contributions">
          <p>
            Developed by <img className="Footer-DELogo" src={DELogo} />
          </p>
        </Row>
      </Container>
    );
  }
}
