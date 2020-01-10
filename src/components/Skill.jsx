import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
      <div className="skill-container">
        <div>
          <img
            className="skill-icon"
            src={this.props.imageSrc}
            alt={this.props.title}
          ></img>
        </div>
        <div className="skill-title">{this.props.title}</div>
      </div>
    );
  }
}

export default Skill;
