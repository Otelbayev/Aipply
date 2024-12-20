import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

const ScrollContextProvider = ({ children }) => {
  const aboutRef = useRef();
  const courseRef = useRef();
  const contactRef = useRef();
  const mentorsRef = useRef();
  const firstRef = useRef();
  return (
    <ScrollContext.Provider
      value={{ aboutRef, courseRef, contactRef, mentorsRef, firstRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
