import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { BsPhone } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import TYCLogo from "../assets/SVGs/TYCLogo.svg";
import {
  composeValidators,
  required,
} from "../components/FormHelper/validtionhelper";
import history from "../history";
import "./styles/Otp.css";
interface State {
  submitted: boolean;
}
interface Props {}
const onSubmit = async (values) => {
  console.log(JSON.stringify(values));
  setTimeout(() => {
    window.location.href = "/SignIn/ConfirmOTP";
  }, 1100);
};
const PhoneAdapter = ({ input }) => (
  <PhoneInput
    {...input}
    enableSearch={true}
    placeholder="Mobile No."
    inputClass="OTP-PhoneInput__Input"
    buttonClass="OTP-PhoneInput__Dropdown"
    country="us"
  />
);
const Phone = styled(BsPhone)`
  margin: 10rem 0rem;
  transform: scale(8);
  transition: color 1s;
`;
export default class Otp extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  render() {
    return (
      <Container className="OTP" fluid>
        <Helmet>
          <title>TYC - Sign In with Mobile Number</title>
        </Helmet>
        <Row>
          <Col className="OTP-Header" xs={12}>
            <h3 className="OTP-Header__Title">SIGN IN WITH MOBILE NUMBER</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                mobile: "",
              }}
              noValidate
              render={({ handleSubmit, submitting, pristine, values }) => (
                <form className="OTP-Form" onSubmit={handleSubmit}>
                  <div>
                    {" "}
                    <Field
                      className="OTP-Mobile"
                      name="mobile"
                      placeholder="Enter phone number"
                      component={PhoneAdapter}
                      validate={composeValidators(required)}
                    />
                  </div>
                  <IconContext.Provider
                    value={{
                      color: `${this.state.submitted ? "#a200a5" : "#8da2af"}`,
                      size: "25px",
                    }}
                  >
                    <div>
                      <Phone />
                    </div>
                  </IconContext.Provider>
                  <div
                    className={`OTP-check ${
                      this.state.submitted && "OTP-check__animate"
                    }`}
                  ></div>
                  <div className="OTP-Btns">
                    <button
                      className={`OTP-Btns__Submit ${
                        values.mobile === "" || values.mobile === undefined
                          ? "OTP-Btns__disabled"
                          : ""
                      }`}
                      type="submit"
                      disabled={
                        values.mobile === "" || values.mobile === undefined
                          ? true
                          : false
                      }
                      onClick={() => {
                        this.setState({ submitted: true });
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </form>
              )}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
