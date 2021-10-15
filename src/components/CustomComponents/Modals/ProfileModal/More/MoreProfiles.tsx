import React from "react";
import { IconContext } from "react-icons";
import {
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineWechat,
} from "react-icons/ai";
import { FaWhatsappSquare, FaYelp } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SiLinktree } from "react-icons/si";
import styled from "styled-components";
import CustomLink from "../../CustomLinkModal/CustomLink";
import AddLinkModal from "../../ProfileAddLinkModal/AddLink";

const Yelp = styled(FaYelp)`
  background: #f43939;
  color: #fff;
  padding: 7px;
  border-radius: 10px;
  margin-left: 2.5px;
`;
const MoreProfiles = (props) => {
  return (
    <div>
      <AddLinkModal
        buttonTitle="Yelp"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px" }}>
            <Yelp />
          </IconContext.Provider>
        }
      />
      <AddLinkModal
        buttonTitle="Calendly"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "45px",
            }}
          >
            <FcCalendar />
          </IconContext.Provider>
        }
      />
      <AddLinkModal
        buttonTitle="Linktree"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#25d366" }}>
            <SiLinktree />
          </IconContext.Provider>
        }
      />
      <CustomLink
        buttonTitle="Add Custom Link"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#ff9100" }}>
            <MdOutlineDashboardCustomize />
          </IconContext.Provider>
        }
      />
    </div>
  );
};

export default MoreProfiles;
