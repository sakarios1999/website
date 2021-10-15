import React from "react";
import { IconContext } from "react-icons";
import { FaPaypal } from "react-icons/fa";
import { IoLogoVenmo } from "react-icons/io5";
import AddLinkModal from "../../ProfileAddLinkModal/AddLink";

const PaymentsProfiles = (props) => {
  return (
    <div>
      <AddLinkModal
        buttonTitle="Paypal"
        buttonLogo={
          <IconContext.Provider value={{ size: "50px", color: "#00457C" }}>
            <FaPaypal />
          </IconContext.Provider>
        }
      />
      <AddLinkModal
        buttonTitle="Venmo"
        buttonLogo={
          <IconContext.Provider
            value={{
              size: "45px",
              color: "#3D95CE",
            }}
          >
            <IoLogoVenmo />
          </IconContext.Provider>
        }
      />
    </div>
  );
};

export default PaymentsProfiles;
