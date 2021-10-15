import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { BsPhone } from "react-icons/bs";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import TYCLogo from "../assets/SVGs/TYCLogo.svg";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  composeValidators,
  required,
} from "../components/FormHelper/validtionhelper";
import "./styles/ForgotPassword-Change.css";
interface State {
  submitted: boolean;
}
interface Props {}
const onSubmit = async (values) => {
  console.log(JSON.stringify(values));
  setTimeout(() => {
    window.location.href = "/SignIn";
  }, 1100);
};

const Phone = styled(BsPhone)`
  margin: 10rem 0rem;
  transform: scale(8);
  transition: color 1s;
`;
export default class ForgotPasswordChange extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  render() {
    return (
      <Container className="ForgotPasswordChange" fluid>
        <Helmet>
          <title>TYC - Forgot Password</title>
        </Helmet>
        <Row>
          <Col className="ForgotPasswordChange-Header" xs={12}>
            <img
              className="ForgotPasswordChange-Header__Img"
              src={TYCLogo}
              alt="TYC Logo"
            />
            <h3 className="ForgotPasswordChange-Header__Title">
              SIGN IN WITH MOBILE NUMBER
            </h3>
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
              render={({ handleSubmit, values }) => (
                <form
                  className="ForgotPasswordChange-Form"
                  onSubmit={handleSubmit}
                >
                  <div>
                    {" "}
                    <Field
                      className="ForgotPasswordChange-Email"
                      name="password"
                      placeholder="Enter new password"
                      type={"password"}
                      component={FieldInput}
                      validate={composeValidators(required)}
                    />
                  </div>
                  <div>
                    {" "}
                    <Field
                      className="ForgotPasswordChange-Email"
                      name="ConfirmPassword"
                      placeholder="Confirm password"
                      type={"password"}
                      component={FieldInput}
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
                    className={`ForgotPasswordChange-check ${
                      this.state.submitted && "OTP-check__animate"
                    }`}
                  ></div>
                  <div className="ForgotPasswordChange-Btns">
                    <button
                      className={`ForgotPasswordChange-Btns__Submit ${
                        values.password === "" || values.password === undefined
                          ? "ForgotPasswordChange-Btns__disabled"
                          : ""
                      }`}
                      type="submit"
                      disabled={
                        values.password === "" || values.password === undefined
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
