import classnames from "classnames";
import React, { useState } from "react";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import ProfileModal from "../CustomComponents/Modals/ProfileModal/ProfileModal";
import "./styles/DashboardTabs.css";

const DashboardTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav className="DashboardTabs" tabs>
        <NavItem
          className={`DashboardTabs-Social ${
            activeTab === "1"
              ? "DashboardTabs-active"
              : "DashboardTabs-inactive"
          }`}
        >
          <NavLink
            className={`${classnames({
              active: activeTab === "1",
            })} `}
            onClick={() => {
              toggle("1");
            }}
          >
            SOCIAL
          </NavLink>
        </NavItem>
        <NavItem
          className={`DashboardTabs-Business ${
            activeTab === "2"
              ? "DashboardTabs-active"
              : "DashboardTabs-inactive"
          }`}
        >
          <NavLink
            className={`${classnames({
              active: activeTab === "2",
            })}`}
            onClick={() => {
              toggle("2");
            }}
          >
            BUSINESS
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="DashboardTabs-TabContent" activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="DashboardTabs-SocialProfile">
            <Col xlg={3} lg={4} md={6} sm={12}>
              <ProfileModal />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col className="p-0">
              <div className="DashboardTabs-Business__Content">
                <div className="DashboardTabs-Business__info">
                  <BiNetworkChart /> Connections 88
                </div>
                <div className="DashboardTabs-Business__info">
                  <BsFillBriefcaseFill /> The 400 Biscuits
                </div>
                <div className="DashboardTabs-Business__info">
                  <AiTwotonePhone /> Nunaya-Nunaya Business
                </div>
                <div className="DashboardTabs-Business__info">
                  <AiOutlineMail /> jbaini@tapyourchip.com
                </div>
                <div className="DashboardTabs-Business__info">
                  <FaGlobeAmericas /> tapyourchip/jane-doe
                </div>
                <div className="DashboardTabs-Business__info">
                  <MdLocationCity /> Miami, U.S
                </div>
              </div>
              <h3>Media</h3>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default DashboardTabs;
