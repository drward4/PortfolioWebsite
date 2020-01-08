import React, { Component } from "react";

class PortfolioSection extends Component {
  render() {
    //let classString = "PortolioSection " + this.props.sectionClass;
    //console.log(this.props);

    return (
      <div id={this.props.id} className="PortfolioSection">
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default PortfolioSection;
