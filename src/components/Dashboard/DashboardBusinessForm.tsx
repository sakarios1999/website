import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { IconContext } from "react-icons";
import { FaPaperPlane } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import { Col, Container, Row } from "reactstrap";
import { FieldInput } from "../FormHelper/formhelper";
import "./styles/DashboardBusinessForm.css";

interface State {
  picUrl: any;
}
interface Props {
  toggleEditing: any;
}

const PhoneAdapter = ({ input }) => (
  <PhoneInput
    {...input}
    enableSearch={true}
    placeholder="Mobile No."
    inputClass="DashboardBusinessForm__MobileInput"
    buttonClass="DashboardBusinessForm__MobileDropdown"
    country="us"
  />
);

export default class DashboardBusinessForm extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      picUrl: null,
    };
  }

  showImage = (e) => {
    this.setState({ picUrl: URL.createObjectURL(e[0]) });
  };

  render() {
    const onSubmit = async (values) => {
      console.log(values);
      this.props.toggleEditing();
    };

    return (
      <Container className="DashboardBusinessForm" fluid>
        <Row>
          <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({ handleSubmit, submitting, pristine, values }) => (
              <form
                className="DashboardBusinessForm-Form"
                onSubmit={handleSubmit}
              >
                <div className="DashboardBusinessForm__Container">
                  <Row>
                    <Col xs={6}>
                      <Field
                        name="mobile"
                        placeholder="Mobile No."
                        component={PhoneAdapter}
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="Skills"
                        placeholder="Add skills"
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="industry"
                        placeholder="Add Industry"
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="interests"
                        placeholder="Add Interest"
                      />
                    </Col>
                    <Col xs={6}>
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="email"
                        placeholder="Add Email"
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="job"
                        placeholder="Add Job"
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="education"
                        placeholder="Add Education"
                      />
                      <Field
                        className="DashboardBusinessForm-Input"
                        type={"text"}
                        component={FieldInput}
                        name="address"
                        placeholder="Add Address"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <div className="DashboardBusinessForm-Btns">
                      <button
                        className="DashboardBusinessForm-Btns__Submit"
                        type="submit"
                      >
                        <IconContext.Provider
                          value={{
                            size: "25px",
                            color: "#fff",
                          }}
                        >
                          <FaPaperPlane />
                        </IconContext.Provider>{" "}
                        Save Changes
                      </button>
                    </div>
                  </Row>
                </div>
              </form>
            )}
          />
        </Row>
      </Container>
    );
  }
}
