import React from "react";
import * as AiIcons from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";

export const SidebarData = [
  {
    title: "Locations (User History)",
    path: "/Locations",
    icon: <AiIcons.AiFillCompass />,
    cName: "Sidebar-text",
  },
  {
    title: "User Transactions",
    path: "/Transactions",
    icon: <BiTransfer />,
    cName: "Sidebar-text",
  },
  {
    title: "My QR Code",
    path: "/QRCode",
    icon: <AiIcons.AiOutlineQrcode />,
    cName: "Sidebar-text",
  },
  {
    title: "Analytics",
    path: "/Analytics",
    icon: <ImStatsDots />,
    cName: "Sidebar-text",
  },
  {
    title: "Settings",
    path: "/Settings",
    icon: <AiIcons.AiFillSetting />,
    cName: "Sidebar-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <GoSignOut />,
    cName: "Sidebar-text",
  },
];
