import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

const MenuContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
