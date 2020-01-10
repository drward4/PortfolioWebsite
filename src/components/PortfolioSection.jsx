import React, { Component } from "react";

class PortfolioSection extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <div className="portfolio-section-spacer"></div>
        <div className="portfolio-section">
          <div className="section-title">
            <h3>{this.props.title}</h3>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PortfolioSection;
