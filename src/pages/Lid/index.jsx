import React, { useState } from "react";
import Page1 from "./page-1";
import Page2 from "./page-2";
import Page3 from "./page-3";
import Page4 from "./page-4";
import Page5 from "./page-5";


const Coding = () => {
  const [steps, setSteps] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const [online, setOnline] = useState(null);
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
      {steps[3] && (
        <Page3 course={course} setCourse={setCourse} setSteps={setSteps} />
      )}
      {steps[4] && <Page4 setSteps={setSteps} formData={formData} />}
      {steps[5] && <Page5 />}
    </div>
  );
};

export default Coding;
