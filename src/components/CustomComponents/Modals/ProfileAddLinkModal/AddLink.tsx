import { useState } from "react";
import { Field, Form } from "react-final-form";
import { IconContext } from "react-icons";
import { BsFillPlusSquareFill } from "react-icons/bs";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Col,
} from "reactstrap";
import { FieldInput } from "../../../FormHelper/formhelper";
import "./AddLink.css";
const onSubmit = async (values) => {
  window.alert(JSON.stringify(values));
};
const AddLinkModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="AddLink">
      <button className="AddLink-AddButton" onClick={toggle}>
        <Col xs={2}> {props.buttonLogo}</Col>
        <Col xs={4}> {props.buttonTitle}</Col>
        <Col xs={2}></Col>
      </button>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          mobile: "",
        }}
        noValidate
        render={({ handleSubmit, submitting, pristine, values }) => (
          <Modal
            isOpen={modal}
            toggle={toggle}
            className={`${className} AddLink-Modal`}
          >
            <ModalHeader className="AddLink-ModalContent" toggle={toggle}>
              Add Link . . .
            </ModalHeader>
            <ModalBody className="AddLink-ModalContent">
              <form className="AddLink-Form" onSubmit={handleSubmit}>
                <div>
                  {" "}
                  <Field
                    className="AddLink-Input"
                    name="Link"
                    placeholder="Enter Link here"
                    component={FieldInput}
                  />
                </div>
              </form>
            </ModalBody>
            <ModalFooter className="AddLink-ModalContent">
              <Button className="AddLink-SubmitButton" onClick={handleSubmit}>
                Add Link
              </Button>{" "}
              <Button className="AddLink-CancelButton" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        )}
      />
    </div>
  );
};

export default AddLinkModal;
