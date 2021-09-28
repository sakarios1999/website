import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { FiStar } from "react-icons/fi";
import { Col, Container, Row } from "reactstrap";
import TYCLogo from "../assets/SVGs/TYCLogo.svg";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  composeValidators,
  number,
} from "../components/FormHelper/validtionhelper";
import "./styles/ConfirmOtp.css";

interface State {
  submitted: boolean;
}
interface Props {}
const onSubmit = async (values) => {
  const otpNumber =
    values.digit1 +
    values.digit2 +
    values.digit3 +
    values.digit4 +
    values.digit5;
  console.log(JSON.stringify(otpNumber));
  setTimeout(() => {
    window.location.href = "/Welcome";
  }, 1700);
};

export default class ConfirmOtp extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  render() {
    return (
      <Container className="ConfirmOTP" fluid>
        <Helmet>
          <title>TYC - Confirm Mobile Number</title>
        </Helmet>
        <Row>
          <Col className="ConfirmOTP-Header" xs={12}>
            <img
              className="ConfirmOTP-Header__Img"
              src={TYCLogo}
              alt="TYC Logo"
            />
            <h3 className="ConfirmOTP-Header__Title">
              MOBILE NUMBER CONFIRMATION
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="ConfirmOTP-Form__Header">
              A one time password has been sent to your E-mail and registered
              Mobile number.
            </p>
            <Form
              onSubmit={onSubmit}
              initialValues={{}}
              noValidate
              render={({ handleSubmit, values }) => (
                <form className="ConfirmOTP-Form" onSubmit={handleSubmit}>
                  <div className="ConfirmOTP-Digits_Container">
                    <Field
                      className="ConfirmOTP-Digits"
                      type={"text"}
                      component={FieldInput}
                      name="digit1"
                      placeholder=""
                      validate={composeValidators(number)}
                      meta={{ valid: false }}
                      maxLength={1}
                    />
                    <Field
                      className="ConfirmOTP-Digits"
                      type={"text"}
                      component={FieldInput}
                      name="digit2"
                      placeholder=""
                      validate={composeValidators(number)}
                      meta={{ valid: false }}
                      maxLength={1}
                    />
                    <Field
                      className="ConfirmOTP-Digits"
                      type={"text"}
                      component={FieldInput}
                      name="digit3"
                      placeholder=""
                      validate={composeValidators(number)}
                      meta={{ valid: false }}
                      maxLength={1}
                    />
                    <Field
                      className="ConfirmOTP-Digits"
                      type={"text"}
                      component={FieldInput}
                      name="digit4"
                      placeholder=""
                      validate={composeValidators(number)}
                      meta={{ valid: false }}
                      maxLength={1}
                    />
                    <Field
                      className="ConfirmOTP-Digits"
                      type={"text"}
                      component={FieldInput}
                      name="digit5"
                      placeholder=""
                      validate={composeValidators(number)}
                      meta={{ valid: false }}
                      maxLength={1}
                    />
                  </div>
                  <div className="circle-container">
                    <div
                      className={`deg0 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg30 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg60 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg90 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg120 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg150 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg180 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg210 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg240 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg270 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg300 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <div
                      className={`deg330 ${
                        this.state.submitted && "animate-stars"
                      }`}
                    >
                      <FiStar />
                    </div>
                    <span className="ConfirmOTP-Checmark__Container">
                      <svg
                        className={`${
                          this.state.submitted && "ConfirmOTP-checkmark"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 52 52"
                      >
                        <circle
                          className={`${
                            this.state.submitted &&
                            "ConfirmOTP-checkmark__circle"
                          }`}
                          cx="26"
                          cy="26"
                          r="25"
                          fill="none"
                        />
                        <path
                          className={`${
                            this.state.submitted &&
                            "ConfirmOTP-checkmark__check"
                          }`}
                          fill="none"
                          d="M14.1 27.2l7.1 7.2 16.7-16.8"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="ConfirmOTP-Btns">
                    <button
                      className={`ConfirmOTP-Btns__Submit ${
                        values.digit1 === "" ||
                        values.digit1 === undefined ||
                        values.digit2 === "" ||
                        values.digit2 === undefined ||
                        values.digit3 === "" ||
                        values.digit3 === undefined ||
                        values.digit4 === "" ||
                        values.digit4 === undefined ||
                        values.digit5 === "" ||
                        values.digit5 === undefined
                          ? "ConfirmOTP-Btns__disabled"
                          : ""
                      }`}
                      type="submit"
                      disabled={
                        values.digit1 === "" ||
                        values.digit1 === undefined ||
                        values.digit2 === "" ||
                        values.digit2 === undefined ||
                        values.digit3 === "" ||
                        values.digit3 === undefined ||
                        values.digit4 === "" ||
                        values.digit4 === undefined ||
                        values.digit5 === "" ||
                        values.digit5 === undefined
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
