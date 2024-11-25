import React from "react";

const WhyItem = ({ title, icon }) => {
  return (
    <div className="why__item">
      <img loading="lazy" src={icon} alt="icon" className="why__item--icon" />
      <div className="why__item--title title">{title}</div>
    </div>
  );
};

export default WhyItem;
