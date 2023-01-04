import React from "react";
import "./Skills.css";
import FrontEnd from "./FrontEnd";
import AdditionalSkills from "./AdditionalSkills";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <FrontEnd />

        <AdditionalSkills />
      </div>
    </section>
  );
};

export default Skills;
