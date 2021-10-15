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
import "./styles/ForgotPassword-Contact.css";
interface State {
  submitted: boolean;
}
interface Props {}
const onSubmit = async (values) => {
  console.log(JSON.stringify(values));
  setTimeout(() => {
    window.location.href = "/ForgotPassword/ChangePassword";
  }, 1100);
};

const Phone = styled(BsPhone)`
  margin: 10rem 0rem;
  transform: scale(8);
  transition: color 1s;
`;
export default class ForgotPasswordContact extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
  }

  render() {
    return (
      <Container className="ForgotPasswordContact" fluid>
        <Helmet>
          <title>TYC - Forgot Password</title>
        </Helmet>
        <Row>
          <Col className="ForgotPasswordContact-Header" xs={12}>
            <img
              className="ForgotPasswordContact-Header__Img"
              src={TYCLogo}
              alt="TYC Logo"
            />
            <h3 className="ForgotPasswordContact-Header__Title">
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
                  className="ForgotPasswordContact-Form"
                  onSubmit={handleSubmit}
                >
                  <div>
                    {" "}
                    <Field
                      className="ForgotPasswordContact-Email"
                      name="Email"
                      placeholder="Enter Email"
                      type={"email"}
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
                    className={`ForgotPasswordContact-check ${
                      this.state.submitted && "OTP-check__animate"
                    }`}
                  ></div>
                  <div className="ForgotPasswordContact-Btns">
                    <button
                      className={`ForgotPasswordContact-Btns__Submit ${
                        values.Email === "" || values.Email === undefined
                          ? "ForgotPasswordContact-Btns__disabled"
                          : ""
                      }`}
                      type="submit"
                      disabled={
                        values.Email === "" || values.Email === undefined
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
