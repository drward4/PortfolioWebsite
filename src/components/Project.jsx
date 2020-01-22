import React, { Component } from "react";
import ProjectLink from "./ProjectLink";

class Project extends Component {
  render() {
    let modalID = this.props.id + "Modal";

    return (
      <div className="project-wrapper">
        <div
          className="project-overlay"
          data-toggle="modal"
          data-target={"#" + modalID}
        >
          <div className="project-overlay-contents">
            <i className="fa fa-search"></i>
          </div>
        </div>
        <div className="project-container">
          <div className="project-title">{this.props.title}</div>
          <div>
            <img
              className="project-image"
              src={this.props.imgSrc}
              alt={this.props.imgAlt}
            />
          </div>
        </div>

        <div id={modalID} className="modal fade" role="dialog">
          <div className="modal-dialog project-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{this.props.title}</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <img
                    className="project-image"
                    src={this.props.imgSrc}
                    alt={this.props.imgAlt}
                  />
                </div>
                <div className="project-description">{this.props.children}</div>
              </div>
              <div className="modal-footer">
                <div className="project-links-container">
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
                </div>
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
