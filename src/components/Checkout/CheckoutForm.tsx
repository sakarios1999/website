import React, { Component } from "react";
import { Field } from "react-final-form";
import { OnChange } from "react-final-form-listeners";
import { Col, Container, Row } from "reactstrap";
import stateData from "../../config/cityState";
import { FieldInput } from "../FormHelper/formhelper";
import {
  composeValidators,
  email,
  required,
  usPostCode,
} from "../FormHelper/validtionhelper";
import Wizard from "../FormHelper/Wizard";
import "./styles/CheckoutForm.css";

export default class CheckoutForm extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { billingDetails: false, city: [] };
  }
  onSubmit = (values: any) => {
    console.log(values);
  };
  changeCity = (value) => {
    this.setState({ city: stateData[value] });
  };
  render() {
    return (
      <Container className="checkoutForm">
        <h3 className="checkoutForm-Title">Checkout</h3>
        <Wizard
          initialValues={{
            email: "abc@abc.com",
            area: this.state.area,
          }}
          onSubmit={this.onSubmit}
        >
          <Wizard.Page title={"Shipping Details"}>
            <Row>
              <Col md="6">
                <Field
                  type={"email"}
                  component={FieldInput}
                  name="email"
                  placeholder="Email"
                  validate={composeValidators(required, email)}
                />
              </Col>
            </Row>
          </Wizard.Page>
          <Wizard.Page title={"Billing Details"}>
            <Row className={"mb-4"}>
              <Col md="6">
                <Field
                  component={FieldInput}
                  name="firstName"
                  placeholder="First Name"
                  validate={required}
                />
              </Col>
              <Col md="6">
                <Field
                  component={FieldInput}
                  name="lastName"
                  placeholder="Last Name"
                  validate={required}
                />
              </Col>
            </Row>
            <Row className={"mb-4"}>
              <Col md="6">
                <Field
                  component={FieldInput}
                  name="address"
                  placeholder="Street Address"
                  validate={required}
                />
              </Col>
              <Col md="6">
                <Field
                  component={"select"}
                  name="area"
                  placeholder="Area"
                  className="checkoutForm-Input"
                >
                  <option selected value={"0"} label={"Select State"} />
                  {Object.keys(stateData).map((key: string) => (
                    <option value={key}>{key}</option>
                  ))}
                </Field>
                <OnChange name={"area"}>
                  {(value, previous) => {
                    // do something
                    this.changeCity(value);
                  }}
                </OnChange>
              </Col>
            </Row>
            <Row className={"mb-4"}>
              <Col md="6">
                <Field
                  component={"select"}
                  name="city"
                  placeholder="City"
                  className="checkoutForm-Input"
                >
                  <option selected value={"0"} label={"Select City"} />
                  {this.state.city &&
                    this.state.city.map((city: string) => (
                      <option value={city}>{city}</option>
                    ))}
                </Field>
              </Col>
              <Col md="6">
                <Field
                  component={FieldInput}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  warning={"this is required to contact you for your order."}
                />
              </Col>
            </Row>
            <Row className={"mb-4"}>
              <Col md="6">
                <Field
                  component={FieldInput}
                  name="zipcode"
                  placeholder="Zipcode"
                  className="checkoutForm-Input"
                  validate={composeValidators(usPostCode)}
                ></Field>
              </Col>
            </Row>
          </Wizard.Page>
        </Wizard>
      </Container>
    );
  }
}
