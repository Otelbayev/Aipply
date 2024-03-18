import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import styled, { css } from "styled-components";
import consent from "../assets/icons/consent.svg?react";
import active from "../assets/icons/active.svg?react";
import rejected from "../assets/icons/rejected.svg?react";
import talked from "../assets/icons/talked.svg?react";
import {
  HomeOutlined,
  GlobalOutlined,
  LogoutOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const navStyle = {
  fontSize: "16px",
  fontFamily: "Gilroy",
  fontWeight: "400",
  color: "lightgray",
};
const style = css`
  width: 20px;
  height: 20px;
`;
const Consent = styled(consent)`
  ${style}
`;
const Talked = styled(talked)`
  ${style}
`;
const Active = styled(active)`
  ${style}
`;
const Rejected = styled(rejected)`
  ${style}
`;

export const sidebarItems = () => {
  return [
    getItem(
      <NavLink style={navStyle} to="/admin">
        Home
      </NavLink>,
      "/admin",
      <HomeOutlined style={navStyle} />
    ),
    getItem(
      <NavLink style={navStyle} to="/admin/all">
        All
      </NavLink>,
      "/admin/all",
      <DatabaseOutlined style={navStyle} />
    ),
    getItem(
      <NavLink style={navStyle} to="/admin/active">
        Active
      </NavLink>,
      "/admin/active",
      <Active />
    ),
    getItem(
      <NavLink style={navStyle} to="/admin/talked">
        Talked
      </NavLink>,
      "/admin/talked",
      <Talked />
    ),
    getItem(
      <NavLink style={navStyle} to="/admin/rejected">
        Rejected
      </NavLink>,
      "/admin/rejected",
      <Rejected />
    ),
    getItem(
      <NavLink style={navStyle} to="/admin/consent">
        Consent
      </NavLink>,
      "/admin/consent",
      <Consent />
    ),
    getItem(
      <NavLink style={navStyle} to="/">
        Saytga
      </NavLink>,
      "site",
      <GlobalOutlined style={navStyle} />
    ),
    getItem(
      <NavLink style={navStyle} to="/" onClick={() => Cookies.remove("_token")}>
        Chiqish
      </NavLink>,
      "exit",
      <LogoutOutlined style={navStyle} />
    ),
  ];
};
