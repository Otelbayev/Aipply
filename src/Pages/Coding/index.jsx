import React, { useState } from "react";
import { Container } from "./style";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";

const Coding = () => {
  const [steps, setSteps] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [online, setOnline] = useState(1);
  const [course, setCourse] = useState(4);

  const formData = {
    form_study_id: online,
    course_id: course,
  };

  return (
    <div>
      {steps[1] && <Page1 setSteps={setSteps} />}
      {steps[2] && (
        <Page2 online={online} setOnline={setOnline} setSteps={setSteps} />
      )}
      {/* {steps[3] && (
        <Page3 course={course} setCourse={setCourse} setSteps={setSteps} />
      )} */}
      {steps[4] && <Page4 setSteps={setSteps} formData={formData} />}
      {steps[5] && <Page5 />}
    </div>
  );
};

export default Coding;
