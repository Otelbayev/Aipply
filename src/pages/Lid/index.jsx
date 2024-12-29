import React, { useEffect, useState } from "react";
import Page1 from "./page-1";
import Page2 from "./page-2";
import Page3 from "./page-3";
import Page4 from "./page-4";
import Page5 from "./page-5";
import { useNavigate } from "react-router-dom";

const courseData = [
  {
    id: 4,
    title: "Kompyuter Savodxonligi",
  },
  {
    id: 6,
    title: "Dasturlash Backend + AI",
  },
  {
    id: 7,
    title: "Dasturlash Frontend + AI",
  },
  {
    id: 2,
    title: "Grafik dizayn + AI",
  },
  {
    id: 8,
    title: "Interyer dizayn + AI",
  },
  {
    id: 9,
    title: "Moushn dizayn + AI",
  },
];

const Coding = () => {
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  const [currentStep, setCurrentStep] = useState(
    parseInt(params.get("step")) || 1
  );
  const [online, setOnline] = useState(null);
  const [course, setCourse] = useState(parseInt(params.get("course")) || 4);

  const selectedCourse = courseData.find((e) => e.id === course);

  const formData = {
    form_study_id: 1,
    course_id: course,
  };

  useEffect(() => {
    const newParams = new URLSearchParams({
      step: currentStep,
      course: course,
    });
    navigate(`?${newParams.toString()}`, { replace: true });
  }, [currentStep, navigate, course]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Page1 setCurrentStep={setCurrentStep} />;
      case 2:
        return (
          <Page2
            online={online}
            setOnline={setOnline}
            setCurrentStep={setCurrentStep}
          />
        );
      case 3:
        return (
          <Page3
            course={course}
            setCourse={setCourse}
            setCurrentStep={setCurrentStep}
            courseData={courseData}
          />
        );
      case 4:
        return (
          <Page4
            selectedCourse={selectedCourse}
            setCurrentStep={setCurrentStep}
            formData={formData}
          />
        );
      case 5:
        return <Page5 />;
      default:
        return <Page1 setCurrentStep={setCurrentStep} />;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Coding;
