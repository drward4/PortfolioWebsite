import React, { Component } from "react";
import ProjectLink from "./ProjectLink";
import ProjectLinksList from "./ProjectLinksList";
import Slider from "react-slick";

class Project extends Component {
  render() {
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    let modalID = this.props.id + "Modal";
    let imageSrcArray =
      this.props.sliderSrc === "" || typeof this.props.sliderSrc === "undefined"
        ? [this.props.imgSrc]
        : this.props.sliderSrc.split(",");

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
          <div className="project-image-container">
            <div>
              <img
                className="project-image"
                src={this.props.imgSrc}
                alt={this.props.imgAlt}
              />
            </div>
          </div>
          <div className="project-footer">
            <ProjectLinksList
              facebookLink={this.props.facebookLink}
              twitterLink={this.props.twitterLink}
              youTubeLink={this.props.youTubeLink}
              gitHubLink={this.props.gitHubLink}
              externalLink={this.props.externalLink}
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
                  <Slider {...settings}>
                    {imageSrcArray.map((img) => (
                      <img src={img} className="project-image"></img>
                    ))}
                  </Slider>
                </div>
                <div className="project-description">{this.props.children}</div>
              </div>
              <div className="modal-footer">
                <div className="modal-footer-section">
                  <ProjectLinksList
                    facebookLink={this.props.facebookLink}
                    twitterLink={this.props.twitterLink}
                    youTubeLink={this.props.youTubeLink}
                    gitHubLink={this.props.gitHubLink}
                    externalLink={this.props.externalLink}
                  />
                </div>
                <div className="modal-footer-section">
                  <div className="project-tech-list">{this.props.techList}</div>
                </div>
                {/* <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
