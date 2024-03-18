import { createContext, useContext, useRef, useState } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

const ScrollProvider = ({ children }) => {
  const courseRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const freeLessonRef = useRef();
  const mentorRef = useRef();
  const data = { courseRef, contactRef, aboutRef, freeLessonRef, mentorRef };
  return (
    <ScrollContext.Provider value={data}>{children}</ScrollContext.Provider>
  );
};

export default ScrollProvider;
