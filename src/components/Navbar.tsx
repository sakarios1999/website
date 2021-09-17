import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import {
  FaBars,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
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
import Hamburger from "../assets/SVGs/Hamburger.svg";
import TYCLogo from "../assets/SVGs/TYCLogo.svg";
import "./Navbar.css";
import { SidebarData } from "./SidebarData";
import NavbarCart from "./NavbarCart/NavbarCart";

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
      <NavbarBrand href="/">
        <img className="Navbar-Brand" src={TYCLogo} alt="" />
      </NavbarBrand>
      <div className="Navbar-Brand_whiteBackground"></div>
      <NavbarBrand href="/">
        <img className="Navbar-Brand_mobile" src={TYCLogo} alt="" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="mr-2">
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
      {/* <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiOutlineClose />
                </Link>
              </li>
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
          </nav>
        </IconContext.Provider>
      </> */}
    </Navbar>
  );
};
function mapStateToProps(state: any) {
  return {
    Cart: state.CartReducer,
  };
}
export default connect(mapStateToProps, null)(NavbarComponent);
