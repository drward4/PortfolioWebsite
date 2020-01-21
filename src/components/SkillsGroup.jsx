import React, { Component } from "react";
import Skill from "./Skill";

/*
Unity
Photoshop
C#
HTML 5
JavaScript
React
CSS 3
Sass
Bootstrap
ASP.NET
SQL
Oracle
MySql
Sql Server
Objective C
Blender
*/

class SkillsGroup extends Component {
  state = {
    skills: [
      { title: "Unity", imageSrc: "icons/unity.png" },
      { title: "C#", imageSrc: "icons/c-sharp.png" },
      { title: "HTML 5", imageSrc: "icons/html5.png" },
      { title: "Javascript", imageSrc: "icons/javascript.png" },
      { title: "React", imageSrc: "icons/react.png" },
      { title: "CSS 3", imageSrc: "icons/css3.png" },
      { title: "SASS", imageSrc: "icons/sass.png" },
      { title: "Bootstrap", imageSrc: "icons/bootstrap.png" },
      { title: "ASP.Net", imageSrc: "icons/asp.png" },
      { title: "SQL", imageSrc: "icons/sql.png" },
      { title: "Oracle", imageSrc: "icons/oracle.png" },
      { title: "MySql", imageSrc: "icons/mysql.png" },
      { title: "SQL Server", imageSrc: "icons/sqlserver.png" },
      { title: "Objective C", imageSrc: "icons/objective-c.png" },
      { title: "Photoshop", imageSrc: "icons/ps.png" },
      { title: "Blender", imageSrc: "icons/blender.png" }
    ]
  };
  render() {
    return (
      <div className="skills-container">
        {this.state.skills.map(skill => (
          <Skill title={skill.title} imageSrc={"/images/" + skill.imageSrc} />
        ))}
      </div>
    );
  }
}

export default SkillsGroup;
