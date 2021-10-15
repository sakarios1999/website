import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Helmet } from "react-helmet";
import { IconContext } from "react-icons";
import { FaCamera } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import ProfilePic from "../assets/Images/Profile-Placeholder.png";
import TYCLogo from "../assets/SVGs/TYCLogo.svg";
import FileField from "../components/FormHelper/fileField";
import { FieldInput } from "../components/FormHelper/formhelper";
import {
  composeValidators,
  required,
} from "../components/FormHelper/validtionhelper";
import "./styles/ProfileInfo.css";
interface State {
  picUrl: any;
}
interface Props {}

const PhoneAdapter = ({ input }) => (
  <PhoneInput
    {...input}
    enableSearch={true}
    placeholder="Mobile No."
    inputClass="ProfileInfo-Account__MobileInput"
    buttonClass="ProfileInfo-Account__MobileDropdown"
    country="us"
  />
);

export default class ProfileInfo extends Component<Props, State> {
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
      window.alert(JSON.stringify(values));
      console.log(values);
      window.location.href = "/Profile/Dashboard";
    };

    return (
      <Container className="ProfileInfo" fluid>
        <Helmet>
          <title>TYC - Profile Info</title>
        </Helmet>
        <Row>
          <Col className="ProfileInfo-Header" xs={12}>
            <h3 className="ProfileInfo-Header__Title">SETUP YOUR PROFILE</h3>
          </Col>
        </Row>
        <Row>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              firstName: "",
              lastName: "",
              pic: FileList,
            }}
            render={({ handleSubmit, submitting, pristine, values }) => (
              <form className="ProfileInfo-Form" onSubmit={handleSubmit}>
                <div className="ProfileInfo-Pic__Container">
                  <label className="ProfileInfo-Pic__Label">
                    <img
                      className="ProfileInfo-Pic__Label"
                      src={this.state.picUrl ? this.state.picUrl : ProfilePic}
                      alt=""
                    />
                    <FileField
                      className="ProfileInfo-Pic__Input"
                      name="pic"
                      showImage={this.showImage}
                    />

                    <IconContext.Provider
                      value={{
                        size: "40px",
                        color: "grey",
                        className: "ProfileInfo-CameraIcon",
                      }}
                    >
                      <div>
                        <FaCamera />
                      </div>
                    </IconContext.Provider>
                  </label>
                </div>
                <div className="ProfileInfo-Personal__Container">
                  {" "}
                  <p className="ProfileInfo-Personal__Header">
                    Personal Details
                  </p>
                  <Field
                    className="ProfileInfo-Input"
                    type={"text"}
                    component={FieldInput}
                    name="firstName"
                    placeholder="First Name"
                  />{" "}
                  <Field
                    className="ProfileInfo-Input"
                    type={"text"}
                    component={FieldInput}
                    name="lastName"
                    placeholder="Last Name"
                  />
                  <Field
                    className="ProfileInfo-Input"
                    type={"text"}
                    component={FieldInput}
                    name="displayName"
                    placeholder="Display Name"
                  />{" "}
                  <Field
                    className="ProfileInfo-Input"
                    type={"text"}
                    component={FieldInput}
                    name="address"
                    placeholder="Address"
                    validate={composeValidators()}
                    v
                  />
                  <label className="ProfileInfo-Radio">
                    <p className="ProfileInfo-Radio__Label">Gender</p>
                    <div className="ProfileInfo-Radio__optionContainer">
                      <label className="ProfileInfo-Radio__option">
                        <p> Male</p>{" "}
                        <Field
                          name="genre"
                          component="input"
                          type="radio"
                          value="male"
                          className="ProfileInfo-Radio__button"
                        />{" "}
                      </label>
                      <label className="ProfileInfo-Radio__option">
                        <p>Female</p>{" "}
                        <Field
                          name="genre"
                          component="input"
                          type="radio"
                          value="female"
                          className="ProfileInfo-Radio__button"
                        />{" "}
                      </label>
                    </div>
                  </label>
                  <Field
                    className="ProfileInfo-Input__textArea"
                    type={"textarea"}
                    component={FieldInput}
                    name="description"
                    placeholder="Tell us something about yourself"
                  />
                </div>
                <div className="ProfileInfo-Account__Container">
                  {" "}
                  <Field
                    name="mobile"
                    placeholder="Mobile No."
                    component={PhoneAdapter}
                    validate={composeValidators(required)}
                  />
                  <Field
                    className="ProfileInfo-Input"
                    type={"email"}
                    component={FieldInput}
                    name="email"
                    placeholder="Email Address"
                  />{" "}
                  <Field
                    className="ProfileInfo-Input"
                    type={"password"}
                    component={FieldInput}
                    name="password"
                    placeholder="Password"
                  />
                  <Field
                    className="ProfileInfo-Input"
                    type={"password"}
                    component={FieldInput}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  <div className="ProfileInfo-Btns">
                    <button
                      className="ProfileInfo-Btns__Submit"
                      type="submit"
                      disabled={submitting || pristine}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            )}
          />
        </Row>
      </Container>
    );
  }
}
