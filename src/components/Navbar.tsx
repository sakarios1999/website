import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Col,
  Collapse,
  CustomInput,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Input,
  Label,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import styled from "styled-components";
import ProfilePicLight from "../assets/Images/Profile-Placeholder light.png";
import ProfilePicDark from "../assets/Images/Profile-Placeholder.png";
import Hamburger from "../assets/SVGs/Hamburger.svg";
import SidebarTYCLogo from "../assets/SVGs/Sidebar-TYC-Logo.svg";
import TYCLogo from "../assets/SVGs/TYCLogo.svg";
import "./Navbar.css";
import NavbarCart from "./NavbarCart/NavbarCart";
import { SidebarData } from "./SidebarData";

const NavbarComponent = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 766);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 766);
    });
    document.addEventListener("mousedown", () => {
      setSidebar(false);
    });
  });
  const Facebook = styled(FaFacebookSquare)`
    color: #00457c;
    ${isMobile && "transform: scale(2)"};
    background-color: #fff;
    border-radius: 2px;
  `;
  const Instagram = styled(FiInstagram)`
    background: linear-gradient(
      45deg,
      #405de6,
      #5851db,
      #833ab4,
      #c13584,
      #e1306c,
      #fd1d1d
    );
    color: #fff;
    ${isMobile && "transform: scale(2)"};
    border-radius: 2px;
    padding: 1px;
  `;
  const Linkedin = styled(FaLinkedin)`
    color: #0e76a8;
    background-color: #fff;
    ${isMobile && "transform: scale(2)"};
    border-radius: 2px;
  `;
  const Twitter = styled(FaTwitterSquare)`
    color: #1da1f2;
    background-color: #fff;
    ${isMobile && "transform: scale(2)"};
    border-radius: 2px;
  `;
  const SideTwitter = styled(FaTwitter)`
    color: #fff;
    transform: scale(1.5);
    margin-left: 1rem;
  `;
  const SideInstagram = styled(FaInstagram)`
    color: #fff;
    transform: scale(1.5);
    margin-left: 1rem;
  `;
  const SideFacebook = styled(FaFacebook)`
    color: #fff;
    transform: scale(1.5);
    margin-left: 1rem;
  `;
  const ColoredLine = () => (
    <hr
      style={{
        height: 1,
        width: "80%",
        display: isMobile ? "block" : "none",
        background:
          "linear-gradient(198deg, rgba(219,194,0,1) 0%, rgba(255,200,0,1) 31%, rgba(252,0,255,1) 100%)",
      }}
    />
  );
  return (
    <Navbar className="Navbar" color="none" expand="md">
      <>
        {" "}
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="Sidebar-btn">
            <Link to="#" className="Sidebar-menuBars">
              <img
                src={ProfilePicDark}
                onClick={showSidebar}
                className="Sidebar-toggler__btn"
              />
            </Link>
          </div>{" "}
          <nav className={sidebar ? "Sidebar-menu active" : "Sidebar-menu"}>
            <div className="Sidebar-Header">
              <Col xs={4} className="p-0 Sidebar-Header__Col">
                <img className="Sidebar-Header__pic" src={ProfilePicLight} />
              </Col>
              <Col xs={7} className="Sidebar-Header__ColInfo">
                <h4 className="Sidebar-Header__username">Username</h4>
                <p className="Sidebar-Header__accountLink">
                  tapyourchip.com/Username
                </p>{" "}
                <div>
                  <CustomInput
                    type="switch"
                    id="ChipState"
                    name="ChipState"
                    className="Sidebar-Header__ChipState"
                  />
                  {/* <p className="Sidebar-Header__ChipOff">Chip Off</p>
                  <p className="Sidebar-Header__ChipOn">Chip On</p> */}
                </div>
              </Col>
            </div>
            <ul className="Sidebar-menuItems" onClick={showSidebar}>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="Sidebar-Footer">
              <img
                className="Sidebar-Footer__Logo"
                src={SidebarTYCLogo}
                alt=""
              />
              <div className="Sidebar-Footer__SocialFlow">
                {" "}
                <NavLink href="/" className="p-0 ">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      className: "Sidebar-Footer__SocialLink",
                    }}
                  >
                    {" "}
                    <SideTwitter />
                  </IconContext.Provider>
                </NavLink>
                <NavLink href="/" className="p-0 ">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      className: "Sidebar-Footer__SocialLink",
                    }}
                  >
                    {" "}
                    <SideInstagram />
                  </IconContext.Provider>
                </NavLink>
                <NavLink href="/" className="p-0 ">
                  {" "}
                  <IconContext.Provider
                    value={{
                      color: "white",
                      className: "Sidebar-Footer__SocialLink",
                    }}
                  >
                    {" "}
                    <SideFacebook />
                  </IconContext.Provider>
                </NavLink>
              </div>
            </div>
          </nav>
        </IconContext.Provider>
      </>
      <NavbarBrand href="/" className="Navbar-Brand__Container">
        <img className="Navbar-Brand" src={TYCLogo} alt="" />
      </NavbarBrand>
      <div className="Navbar-Brand_whiteBackground"></div>
      <NavbarBrand href="/" className="Navbar-Brand__ContainerMobile">
        <img className="Navbar-Brand_mobile" src={TYCLogo} alt="" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="mr-2 Navbar-Btn__Container">
        <button className="Navbar-Btn">
          <img src={Hamburger} alt="" />
        </button>
      </NavbarToggler>

      <Collapse className="Navbar-Collapse" isOpen={isOpen} navbar>
        <Nav className="Navbar-LinkGroup" navbar>
          <NavItem className="Navbar-Item">
            <NavLink
              className="Navbar-Link"
              href="/#Features"
              onClick={() => setIsOpen(false)}
            >
              Features
            </NavLink>
          </NavItem>
          <ColoredLine />
          <NavItem className="Navbar-Item">
            <NavLink
              className="Navbar-Link"
              href="/#HowItWorks"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </NavLink>
          </NavItem>
          <ColoredLine />
          <UncontrolledDropdown
            className="Navbar-Item Navbar-Shop"
            nav
            inNavbar
          >
            <NavLink className="Navbar-Link" href="/Shop">
              <DropdownToggle
                className="Navbar-Link Navbar-shop__btn"
                caret={isMobile === true ? false : true}
              >
                Shop
              </DropdownToggle>
            </NavLink>

            <DropdownMenu className="Navbar-Menu">
              <DropdownItem className="Navbar-Menu__Item">
                <NavLink className="Navbar-Menu__Item" href="/Shop">
                  TYC Card
                </NavLink>
              </DropdownItem>
              <DropdownItem className="Navbar-Menu__Item">
                <NavLink className="Navbar-Menu__Item" href="/Shop">
                  TYC Chips
                </NavLink>
              </DropdownItem>
              <DropdownItem className="Navbar-Menu__Item">
                <NavLink className="Navbar-Menu__Item" href="/shop">
                  TYC PhoneCases
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <ColoredLine />
          <NavItem className="Navbar-Item">
            <NavLink
              className="Navbar-Link"
              href="/#Form"
              onClick={() => setIsOpen(false)}
            >
              Distributors
            </NavLink>
          </NavItem>
          <ColoredLine />
          <NavItem className="Navbar-Item">
            <NavLink
              className="Navbar-Link"
              href="/Support"
              onClick={() => setIsOpen(false)}
            >
              Support
            </NavLink>
          </NavItem>
          <ColoredLine />
        </Nav>
        <Nav className="Navbar-SocialMedia__Container">
          <NavItem className="Navbar-SocialMedia__Group">
            <NavLink href="/" className="Navbar-SocialMedia">
              <Facebook />
            </NavLink>
            <NavLink href="/" className="Navbar-SocialMedia">
              <Instagram />
            </NavLink>
            <NavLink href="/" className="Navbar-SocialMedia">
              <Twitter />
            </NavLink>
            <NavLink href="/" className="Navbar-SocialMedia">
              <Linkedin />
            </NavLink>
          </NavItem>
        </Nav>
        <NavItem className="Navbar-SignIn">
          <NavLink href="/SignIn" className="Navbar-SignIn__Btn">
            Sign In
          </NavLink>
        </NavItem>
        <Form className="Navbar-Search">
          <Label className="Navbar-Search__Label" for="search">
            <AiOutlineSearch />
          </Label>
          <Input
            className="Navbar-Search__Input np-border"
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          />
        </Form>
        <div className="Navbar-Cart__MobileContainer">
          <div className="Navbar-Cart__Neon">
            <NavLink className="Navbar-Cart__Mobile" href="/Cart">
              <IconContext.Provider
                value={{
                  className: "Navbar-Cart__icon",
                  color: "#000",
                  size: "50px",
                }}
              >
                <BiCartAlt />
              </IconContext.Provider>
            </NavLink>
            <p>
              ({props.Cart.Cart.length}
              {"  "}
              {props.Cart.Cart.length > 1 ? "items" : "item"})
            </p>
          </div>
        </div>
        <UncontrolledDropdown
          className="Navbar-Item Navbar-Cart__Container"
          nav
          inNavbar
        >
          <DropdownToggle
            nav
            caret={isMobile === true ? false : true}
            className="Navbar-Cart"
          >
            <IconContext.Provider
              value={{
                className: "Navbar-Cart__icon",
                color: "#000",
                size: "50px",
              }}
            >
              <BiCartAlt />
            </IconContext.Provider>
            <p>({props.Cart.Cart.length})</p>
          </DropdownToggle>
          <DropdownMenu className="Navbar-Cart_Dropdown" right>
            <Row>
              <NavbarCart />
            </Row>
            <Row></Row>
            <Row>
              <NavLink className="Navbar-Checkout" href="/Cart">
                CHECKOUT
              </NavLink>
            </Row>
          </DropdownMenu>
        </UncontrolledDropdown>{" "}
      </Collapse>
    </Navbar>
  );
};

function mapStateToProps(state: any) {
  return {
    Cart: state.CartReducer,
  };
}
export default connect(mapStateToProps, null)(NavbarComponent);
