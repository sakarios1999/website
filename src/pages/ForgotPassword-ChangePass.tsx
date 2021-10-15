import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { Col, Container, Row } from "reactstrap";
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
            <h3 className="ForgotPasswordChange-Header__Title">
              Reset Password
            </h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form
              onSubmit={onSubmit}
              initialValues={{}}
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
