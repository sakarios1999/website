import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import click from "../assets/SVGs/SignUp-ClickIcon.svg";
import TYCLogo from "../assets/SVGs/TYCLogo.svg";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  composeValidators,
  email,
  required,
} from "../components/FormHelper/validtionhelper";
import "./styles/SignUp.css";
const onSubmit = async (values) => {
  window.alert(JSON.stringify(values));
};
const PhoneAdapter = ({ input }) => (
  <PhoneInput
    {...input}
    enableSearch={true}
    placeholder="Mobile No."
    inputClass="PhoneInput-Input"
    buttonClass="PhoneInput-Dropdown"
    country="us"
  />
);

export default class SignUp extends Component {
  render() {
    return (
      <Container className="SignUp" fluid>
        {" "}
        <Helmet>
          <title>TYC - Sign Up</title>
        </Helmet>{" "}
        <Row>
          <Col className="SignUp-Header" xs={12}>
            <img className="SignUp-Header__Img" src={TYCLogo} alt="TYC Logo" />
            <h3 className="SignUp-Header__Title">SIGN UP</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 5, offset: 1 }} className="SignUp-UserInfo">
            <div className="SignUp-SignInSection">
              <p>Already a User? </p>
              <Link className="SignUp-SignInSection__Link" to="/SignIn">
                Sign In
              </Link>
            </div>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                email: "",
                mobile: "",
                password: "",
              }}
              noValidate
              render={({ handleSubmit, submitting, pristine }) => (
                <form className="SignUp-Form" onSubmit={handleSubmit}>
                  <div>
                    {" "}
                    <Field
                      className="SignUp-Input"
                      type={"email"}
                      component={FieldInput}
                      name="email"
                      placeholder="Email"
                      validate={composeValidators(required, email)}
                    />
                    <Field
                      className="SingUp-Mobile"
                      name="mobile"
                      placeholder="Enter phone number"
                      component={PhoneAdapter}
                      validate={composeValidators(required)}
                    />
                    <Field
                      className="SignUp-Input"
                      type={"password"}
                      component={FieldInput}
                      name="Password"
                      placeholder="Password"
                      validate={composeValidators(required)}
                    />
                    <Field
                      className="SignUp-Input"
                      type={"password"}
                      component={FieldInput}
                      name="ConfirmPassword"
                      placeholder="Confirm Password"
                      validate={composeValidators(required)}
                    />
                  </div>
                  <div className="SignUp-Btns">
                    <button
                      className="SignUp-Btns__Submit"
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              )}
            />
          </Col>
          <Col sm={6} className="SignUp-SocialLogin">
            <div className="SignUp-Separator">
              <span></span>
              <p>or sign up with</p>
              <span></span>
            </div>
            <div className="SignUp-SocialMedia">
              <button className="SignUp-Social SignUp-facebook">
                <FaFacebookF />
                Facebook
              </button>
              <button className="SignUp-Social SignUp-twitter">
                <FaTwitter />
                Twitter
              </button>
              <button className="SignUp-Social SignUp-linkedIn">
                <FaLinkedinIn />
                LinkedIn
              </button>
              <button className="SignUp-Social SignUp-Google">
                <FcGoogle />
                Google
              </button>
            </div>
            <div className="SignUp-Img">
              <img className="SignUp-Img__Click" src={click} alt="Click-Icon" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
