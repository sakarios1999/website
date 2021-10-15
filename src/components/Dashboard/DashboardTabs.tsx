import classnames from "classnames";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGlobeAmericas, FaPaperPlane } from "react-icons/fa";
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
import DashboardBusinessForm from "./DashboardBusinessForm";
import "./styles/DashboardTabs.css";

const DashboardTabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [editing, setEditing] = useState(false);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const handleEditing = () => {
    setEditing(!editing);
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
            <Col
              xlg={3}
              lg={4}
              md={6}
              sm={12}
              className="DashboardTabs-AddButton"
            >
              <ProfileModal />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          {editing === false ? (
            <Row>
              <Col className="p-0">
                <div className="DashboardTabs-Business__Content">
                  <div>
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
                  <button
                    className="DashboardTabs-Business__EditButton"
                    onClick={() => handleEditing()}
                  >
                    <IconContext.Provider
                      value={{
                        size: "25px",
                        color: "#fff",
                      }}
                    >
                      <FaPaperPlane />
                    </IconContext.Provider>
                  </button>
                </div>
                <h3>Media</h3>
              </Col>
            </Row>
          ) : (
            <DashboardBusinessForm toggleEditing={() => handleEditing()} />
          )}
        </TabPane>
      </TabContent>
    </div>
  );
};

export default DashboardTabs;
