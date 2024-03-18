import React from "react";
import Footer from "./../Footer";
import Header from "./../Header";
import { Outlet } from "react-router-dom";

const Universal = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Universal;
