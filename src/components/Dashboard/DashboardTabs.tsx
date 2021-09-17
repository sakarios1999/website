import classnames from "classnames";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsFillPlusSquareFill } from "react-icons/bs";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
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
          <Row>
            <Col xlg={3} lg={4} md={6} sm={12}>
              <button className="DashboardTabs-AddButton">
                <IconContext.Provider value={{ size: "100%" }}>
                  <div>
                    <BsFillPlusSquareFill />
                  </div>
                </IconContext.Provider>
                Add Link
              </button>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col xlg={3} lg={4} md={6} sm={12}>
              <button className="DashboardTabs-AddButton">
                <IconContext.Provider value={{ size: "100%" }}>
                  <div>
                    <BsFillPlusSquareFill />
                  </div>
                </IconContext.Provider>
                Add Link
              </button>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default DashboardTabs;
