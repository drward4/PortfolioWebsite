import React, { Component } from "react";

class ProjectLink extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank">
        <div
          className={
            this.props.link === "" || typeof this.props.link === "undefined"
              ? "projectLinkHidden"
              : "projectLink"
          }
        >
          <div className="projectLinkIcon">
            <i className={"fa " + this.props.faClass}></i>
          </div>
        </div>
      </a>
    );
  }
}

export default ProjectLink;
