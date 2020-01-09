import React, { Component } from "react";

class PortfolioSection extends Component {
  render() {
    //let classString = "PortolioSection " + this.props.sectionClass;
    //console.log(this.props);

    return (
      <div id={this.props.id} className="PortfolioSection">
        <div className="container">
          <div className="SectionTitle">
            <h3>{this.props.title}</h3>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PortfolioSection;
