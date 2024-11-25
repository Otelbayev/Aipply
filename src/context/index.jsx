import React from "react";
import MenuContextProvider from "./menu-context";
import ScrollContextProvider from "./scroll-context";

const Context = ({ children }) => {
  return (
    <MenuContextProvider>
      <ScrollContextProvider>{children}</ScrollContextProvider>
    </MenuContextProvider>
  );
};

export default Context;
