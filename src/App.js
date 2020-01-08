import React from "react";
import PortfolioSection from "./components/PortfolioSection";

import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <a className="navbar-brand mr-auto" href="#">
            DANIEL WARD
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#AboutSection">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#SkillsSection">
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#WorkSection">
                  WORK
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div>
        <main>
          <PortfolioSection id="AboutSection" sectionClass="AboutSection">
            <div className="aboutSectionName">
              <h1>DANIEL WARD</h1>
              <h2 className="aboutSectionJobTitle">SOFTWARE DEVELOPER</h2>
            </div>
            <div className="aboutSectionDescription">
              <p>
                Hi! I'm a Software Developer with a broad range of experience
                working in both front-end and back-end development. I create
                apps, games, and websites, among other things. I'm currently
                looking for new opportunities with a focus on cross-platform
                mobile or full stack web development.
              </p>
            </div>
          </PortfolioSection>
          <PortfolioSection id="SkillsSection">SKILLS</PortfolioSection>
          <PortfolioSection id="WorkSection">Work</PortfolioSection>
        </main>
      </div>
    </div>
  );
}

export default App;
