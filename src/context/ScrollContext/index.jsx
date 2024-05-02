import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

const ScrollProvider = ({ children }) => {
  const courseRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const freeLessonRef = useRef(null);
  const mentorRef = useRef(null);
  const readRef = useRef(null);
  const data = {
    courseRef,
    contactRef,
    aboutRef,
    freeLessonRef,
    mentorRef,
    readRef,
  };
  return (
    <ScrollContext.Provider value={data}>{children}</ScrollContext.Provider>
  );
};

export default ScrollProvider;
