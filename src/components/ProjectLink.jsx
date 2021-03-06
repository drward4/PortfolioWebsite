import React, { Component } from "react";

class ProjectLink extends Component {
  render() {
    if (this.props.isSpacer === "true") {
      return <div className="project-link-spacer"></div>;
    } else {
      return (
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <div
            className={
              this.props.link === "" || typeof this.props.link === "undefined"
                ? "project-link-hidden"
                : "project-link"
            }
          >
            <div className="project-link-icon">
              <i className={"fa " + this.props.faClass}></i>
            </div>
          </div>
        </a>
      );
    }
  }
}

export default ProjectLink;
