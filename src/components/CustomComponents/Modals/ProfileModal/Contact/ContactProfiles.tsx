import React from "react";
import { IconContext } from "react-icons";
import {
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineWechat,
} from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
import styled from "styled-components";
import AddLinkModal from "../../ProfileAddLinkModal/AddLink";

const Wechat = styled(AiOutlineWechat)`
  background: #7bb32e;
  color: #fff;
  padding: 7px;
  border-radius: 10px;
  margin-left: 2.5px;
`;
const ContactProfiles = (props) => {
  return (
    <div>
      <AddLinkModal
        buttonTitle="Text"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px" }}>
            <AiOutlineFileText />
          </IconContext.Provider>
        }
      />
      <AddLinkModal
        buttonTitle="Email"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "45px",
            }}
          >
            <AiOutlineMail />
          </IconContext.Provider>
        }
      />
      <AddLinkModal
        buttonTitle="Whatsapp"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#25d366" }}>
            <FaWhatsappSquare />
          </IconContext.Provider>
        }
      />
      <AddLinkModal
        buttonTitle="Wechat"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "50px",
            }}
          >
            <Wechat />
          </IconContext.Provider>
        }
      />
    </div>
  );
};

export default ContactProfiles;
