import MenuProvider from "./MenuContext";
import ScrollProvider from "./ScrollContext";

const Context = ({ children }) => (
  <ScrollProvider>
    <MenuProvider>{children}</MenuProvider>
  </ScrollProvider>
);

export default Context;
