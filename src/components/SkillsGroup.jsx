import React, { Component } from "react";
import Skill from "./Skill";

class SkillsGroup extends Component {
  state = {
    skills: [{ title: "HTML 5", imageSrc: "XenonMoon.jpg" }]
  };
  render() {
    return (
      <div>
        {this.state.skills.map(skill => (
          <Skill title={skill.title} imageSrc={"/images/" + skill.imageSrc} />
        ))}
      </div>
    );
  }
}

export default SkillsGroup;
