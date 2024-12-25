import React from "react";

const WhyItem = ({ title, icon }) => {
  return (
    <div className="why__item" data-aos="zoom-in">
      <img
        loading="lazy"
        effect="blur"
        src={icon}
        alt="icon"
        className="why__item--icon"
      />
      <div className="why__item--title title">{title}</div>
    </div>
  );
};

export default WhyItem;
