import React from "react";
import logo from "../../assets/icons/logo1.png";
const Loading = () => {
  return (
    <div className="loading">
      <img
        loading="lazy"
        effect="blur"
        style={{ width: "200px" }}
        src={logo}
        alt=""
      />
    </div>
  );
};

export default Loading;
