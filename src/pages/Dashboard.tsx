import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import ProfilePic from "../assets/Images/Profile-Placeholder.png";
import DashboardTabs from "../components/Dashboard/DashboardTabs";
import "./styles/Dashboard.css";

interface State {
  Direct: boolean;
}
interface Props {}
export default class Dashboard extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { Direct: false };
    this.handleDirectSwitch = this.handleDirectSwitch.bind(this);
  }
  handleDirectSwitch() {
    this.setState({ Direct: !this.state.Direct });
  }
  render() {
    return (
      <>
        <Container fluid className="Dashboard">
          <Row>
            <Col xs={12} className="Dashboard-Header">
              <img
                className="Dashboard-ProfilePic"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <h3 className="Dashboard-Username">JDoe</h3>
              <p className="Dashboard-ProfileLink">tapyourchip.com/JDoe</p>
              <button
                className={`Dashboard-DirectSwitch ${
                  !this.state.Direct
                    ? "Dashboard-DirectSwitch__off"
                    : "Dashboard-DirectSwitch__on"
                }`}
                onClick={this.handleDirectSwitch}
              >
                {!this.state.Direct ? "DIRECT OFF" : "DIRECT ON"}
              </button>

              <Link to="/Profile/EditInfo" className="Dashboard-EditProfile">
                EDIT PROFILE
              </Link>
            </Col>
          </Row>
          <Row className="Dashboard-Accounts">
            <Col xs={12}>
              {" "}
              <DashboardTabs />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
