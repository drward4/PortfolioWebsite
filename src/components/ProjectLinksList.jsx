import React, { Component } from "react";
import ProjectLink from "./ProjectLink";

class ProjectLinksList extends Component {
  render() {
    return (
      <div className="project-links-list">
        <ProjectLink
          id="AppStore"
          faClass="fa-apple"
          link={this.props.iOSLink}
        />
        <ProjectLink
          id="GooglePlayStore"
          faClass="fa-android"
          link={this.props.iOSLink}
        />
        <ProjectLink
          id="Facebook"
          faClass="fa-facebook"
          link={this.props.facebookLink}
        />
        <ProjectLink
          id="Twitter"
          faClass="fa-twitter"
          link={this.props.twitterLink}
        />
        <ProjectLink
          id="YouTube"
          faClass="fa-youtube-play"
          link={this.props.youTubeLink}
        />
        <ProjectLink
          id="GitHub"
          faClass="fa-github"
          link={this.props.gitHubLink}
        />
        <ProjectLink
          id="YouTube"
          faClass="fa-external-link"
          link={this.props.externalLink}
        />
        <ProjectLink
          id="Spacer"
          isSpacer="true"
          link={this.props.externalLink}
        />
      </div>
    );
  }
}

export default ProjectLinksList;
