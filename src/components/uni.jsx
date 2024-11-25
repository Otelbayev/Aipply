import React from "react";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import { Outlet } from "react-router-dom";
import { useMenuContext } from "../context/menu-context";

const Uni = () => {
  const { showMenu } = useMenuContext();
  return (
    <>
      <Header />
      <Outlet />
      {!showMenu && <Footer />}
    </>
  );
};

export default Uni;
