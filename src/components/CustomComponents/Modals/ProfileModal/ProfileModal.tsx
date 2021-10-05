import { useState } from "react";
import { IconContext } from "react-icons";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./ProfileModal.css";
import SocialMediaProfiles from "./SocialMedia/SocialMediaProfiles";
const onSubmit = async (values) => {
  window.alert(JSON.stringify(values));
};
const ProfileModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [SocialMedia, setSocialMedia] = useState(false);
  const [Contact, setContact] = useState(false);
  const [Music, setMusic] = useState(false);
  const [Payment, setPayment] = useState(false);
  const [More, setMore] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleSocialMedia = () => setSocialMedia(!SocialMedia);
  const toggleContact = () => setContact(!Contact);
  const toggleMusic = () => setMusic(!Music);
  const togglePayment = () => setPayment(!Payment);
  const toggleMore = () => setMore(!More);

  return (
    <div>
      <button className="ProfileModal-AddButton" onClick={toggle}>
        <IconContext.Provider value={{ size: "100%" }}>
          <div>
            <BsFillPlusSquareFill />
          </div>
        </IconContext.Provider>
        Add Link
      </button>

      <Modal
        isOpen={modal}
        toggle={toggle}
        className={`${className} ProfileModal-Modal`}
      >
        <ModalHeader className="ProfileModal-ModalContent" toggle={toggle}>
          Add a Profile . . .
        </ModalHeader>
        <ModalBody className="ProfileModal-ModalContent ProfileModal-ModalBody">
          <button
            className="ProfileModal-ProfileButton ProfileModal-ProfileButton__Social"
            onClick={toggleSocialMedia}
          >
            Social Media
          </button>
          <Modal isOpen={SocialMedia} toggle={toggleSocialMedia}>
            <ModalHeader>Choose a Social Media Profile . . .</ModalHeader>
            <ModalBody className="ProfileModal-ModalBody__Groups">
              <SocialMediaProfiles />
            </ModalBody>
            <ModalFooter>
              <Button
                className="ProfileModal-CancelButton"
                onClick={toggleSocialMedia}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
          <button
            className="ProfileModal-ProfileButton ProfileModal-ProfileButton__Contact"
            onClick={toggleContact}
          >
            Contact
          </button>
          <Modal isOpen={Contact} toggle={toggleContact}>
            <ModalHeader>Choose a Contact . . .</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            <ModalFooter>
              <Button
                className="ProfileModal-CancelButton"
                onClick={toggleContact}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
          <button
            className="ProfileModal-ProfileButton ProfileModal-ProfileButton__Music"
            onClick={toggleMusic}
          >
            Music
          </button>
          <Modal isOpen={Music} toggle={toggleMusic}>
            <ModalHeader>Choose a Music Profile . . .</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            <ModalFooter>
              <Button
                className="ProfileModal-CancelButton"
                onClick={toggleMusic}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
          <button
            className="ProfileModal-ProfileButton ProfileModal-ProfileButton__Payment"
            onClick={togglePayment}
          >
            Payment
          </button>
          <Modal isOpen={Payment} toggle={togglePayment}>
            <ModalHeader>Choose a Payment Profile . . .</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            <ModalFooter>
              <Button
                className="ProfileModal-CancelButton"
                onClick={togglePayment}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
          <button
            className="ProfileModal-ProfileButton ProfileModal-ProfileButton__More"
            onClick={toggleMore}
          >
            More
          </button>
          <Modal isOpen={More} toggle={toggleMore}>
            <ModalHeader>More . . .</ModalHeader>
            <ModalBody>Stuff and things</ModalBody>
            <ModalFooter>
              <Button
                className="ProfileModal-CancelButton"
                onClick={toggleMore}
              >
                Back
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter className="ProfileModal-ModalContent">
          <Button className="ProfileModal-CancelButton" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProfileModal;
