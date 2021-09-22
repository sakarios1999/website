import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Lock from "../assets/SVGs/SignIn-LockIcon.svg";
import Stars from "../assets/SVGs/SignIn-Stars.svg";
import TYCLogo from "../assets/SVGs/TYCLogo.svg";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  composeValidators,
  email,
  required,
} from "../components/FormHelper/validtionhelper";
import history from "../history";
import "./styles/SignIn.css";
const onSubmit = async (values) => {
  window.alert(JSON.stringify(values));
  history.push("/Profile/Dashboard");
};
export default class SignIn extends Component {
  render() {
    return (
      <Container className="SignIn" fluid>
        <Helmet>
          <title>TYC - Sign In</title>
        </Helmet>
        <Row>
          <Col className="SignIn-Header" xs={12}>
            <img className="SignIn-Header__Img" src={TYCLogo} alt="TYC Logo" />
            <h3 className="SignIn-Header__Title">SIGN IN</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 5, offset: 1 }}>
            <div className="SignIn-SignUpSection">
              <p>New User? </p>
              <Link className="SignIn-SignUpSection__Link" to="/SignUp">
                Create an Account
              </Link>
            </div>

            <Form
              onSubmit={onSubmit}
              initialValues={{
                email: "",
                password: "",
              }}
              render={({ handleSubmit, submitting, pristine }) => (
                <form className="SignIn-Form" onSubmit={handleSubmit}>
                  <div>
                    <Field
                      className="SignIn-Input"
                      type={"email"}
                      component={FieldInput}
                      name="email"
                      placeholder="Username or Email"
                      validate={composeValidators(required, email)}
                    />
                    <Field
                      className="SignIn-Input"
                      type={"password"}
                      component={FieldInput}
                      name="password"
                      placeholder="Password"
                      validate={composeValidators(required)}
                      valid={false}
                    />
                  </div>
                  <Link className="SignIn-ForgotPassword" to="/">
                    Forgot Password?
                  </Link>
                  <label className="SignIn-KeepMeSigned">
                    <Field
                      name="Remember Me"
                      component="input"
                      type="checkbox"
                      value="rememberMe"
                    />{" "}
                    Keep me signed in
                  </label>
                  <div className="SignIn-Btns">
                    <button
                      className="SignIn-Btns__Submit"
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Sign In
                    </button>
                    <Link className="SignIn-Btns__OTP" to="/SignIn/Otp">
                      Use Phone Number
                    </Link>
                  </div>
                </form>
              )}
            />
            <div className="SignIn-Separator">
              <span></span>
              <p>or sign in with</p>
              <span></span>
            </div>
            <div className="SignIn-SocialMedia">
              <button className="SignIn-Social SignIn-facebook">
                <FaFacebookF />
                Facebook
              </button>
              <button className="SignIn-Social SignIn-twitter">
                <FaTwitter />
                Twitter
              </button>
              <button className="SignIn-Social SignIn-linkedIn">
                <FaLinkedinIn />
                LinkedIn
              </button>
              <button className="SignIn-Social SignIn-Google">
                <FcGoogle />
                Google
              </button>
            </div>
          </Col>
          <Col sm={6} className="SignIn-Img">
            <img className="SignIn-Img__Lock" src={Lock} alt="Lock-Icon"></img>
            <img
              className="SignIn-Img__Stars"
              src={Stars}
              alt="Stars-Icon"
            ></img>
          </Col>
        </Row>
      </Container>
    );
  }
}
