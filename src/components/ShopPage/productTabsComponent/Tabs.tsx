import classnames from "classnames";
import React, { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import "./Tabs.css";

const Tabs = (props: any) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs className="product-Tabs">
        <NavItem className="NavItem">
          <NavLink
            className={`${classnames({
              active: activeTab === "1",
            })} Tabs-Headers`}
            onClick={() => {
              toggle("1");
            }}
          >
            Description
          </NavLink>
        </NavItem>
        <NavItem className="NavItem">
          <NavLink
            className={`${classnames({
              active: activeTab === "2",
            })} Tabs-Headers`}
            onClick={() => {
              toggle("2");
            }}
          >
            Additional Information
          </NavLink>
        </NavItem>
        <NavItem className="NavItem">
          <NavLink
            className={`${classnames({
              active: activeTab === "3",
            })} Tabs-Headers`}
            onClick={() => {
              toggle("3");
            }}
          >
            Reviews
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row className="Tabs-description">
            <Col
              sm="12"
              dangerouslySetInnerHTML={{ __html: props.description }}
            />
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="Tabs-info">
            <Col
              sm="12"
              dangerouslySetInnerHTML={{ __html: props.additionalInfo }}
            />
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row className="Tabs-Reviews">
            <Col sm="6">
              <Card body>
                <CardTitle>User</CardTitle>
                <CardText className="Tabs-Cards__Text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia, veniam. Tempora saepe quaerat, repellendus nisi
                  asperiores beatae itaque vitae perferendis vero quos sit
                  exercitationem officiis praesentium non architecto earum
                  doloribus.
                </CardText>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>User 2</CardTitle>
                <CardText className="Tabs-Cards__Text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                  quo libero, odio dolores sit ullam fugit aliquid omnis
                  repellendus. Voluptatem omnis deleniti voluptates itaque
                  corporis! Amet ipsa eius repudiandae dignissimos!
                </CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
