import React from "react";

const About = ({ blogLogo = "https://via.placeholder.com/215", blogAbout }) => {
  return (
    <aside>
      <img src={blogLogo} alt="logo" />
      <p>{blogAbout}</p>
    </aside>
  );
};

export default About;
