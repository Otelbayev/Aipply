import MenuContextProvider from "./menu-context";
import ScrollContextProvider from "./scroll-context";

const ContextProvider = ({ children }) => {
  return (
    <MenuContextProvider>
      <ScrollContextProvider>{children}</ScrollContextProvider>
    </MenuContextProvider>
  );
};

export default ContextProvider;
