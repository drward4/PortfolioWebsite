import React from "react";
import PortfolioSection from "./components/PortfolioSection";

import "./App.css";
import Project from "./components/Project";
import Skill from "./components/Skill";
import SkillsGroup from "./components/SkillsGroup";

function App() {
  return (
    <div id="top">
      <header>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
          <a className="navbar-brand mr-auto" href="#top">
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
                <a className="nav-link" href="#ExperienceSection">
                  EXPERIENCE
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
      <main>
        <PortfolioSection id="AboutSection">
          <div className="container">
            <div className="about-section-name">
              <h1>DANIEL WARD</h1>
              <h4 className="about-section-job-title">SOFTWARE DEVELOPER</h4>
            </div>
            <div className="about-section-description">
              <p>
                Hi! I'm a Software Developer with a broad range of experience
                working in both front and back-end development. I create apps,
                games, and websites, among other things. I'm currently looking
                for new opportunities with a focus on either cross-platform
                mobile or full stack web development.
              </p>
            </div>
          </div>
        </PortfolioSection>
        <PortfolioSection id="ExperienceSection" title="EXPERIENCE">
          <div className="experience-container">
            <SkillsGroup />
          </div>
        </PortfolioSection>
        <PortfolioSection id="WorkSection" title="WORK / PROJECTS">
          <div className="projects-group-container">
            <Project
              id="XenonMoon"
              title="Xenon Moon"
              imgSrc="/images/XenonMoon.jpg"
              imgAlt="Xenon Moon"
              facebookLink=""
              twitterLink=""
              youTubeLink=""
              gitHubLink=""
              externalLink=""
            >
              <p>
                Xenon Moon is a 3D action / exploration game I'm creating with
                several others (I'm the sole programmer). Some features include
                procedural 3D world creation, 2D puzzles, craft upgrades, combat
                with enemy AI, and an in-depth written story. It's planned for
                release in early 2020.
              </p>
            </Project>

            <Project
              id="JamSpring"
              title="JamSpring"
              imgSrc="/images/JamSpring.jpg"
              imgAlt="JamSpring"
              facebookLink="https://www.facebook.com/JamSpringNetwork"
              youTubeLink="https://www.youtube.com/watch?v=A3bEDSrtLi4"
            >
              <p>
                JamSpring was a guitar / music app I created with several others
                (I was the sole programmer). It automatically determines the key
                of live music and connects users with a range of style-based
                suggestions for the guitar.
              </p>
              <p>
                Key Features include: Multi-track Recording Studio; Automatic
                Key Detection; Interactive Virtual Guitar; Chord Progression
                Generator; Style Based Suggestionss for Progressions, Chords,
                and Scales; Email based Colloboration with other JamSpring
                Users.
              </p>
              <p></p>
            </Project>

            <Project
              id="Zasaword"
              title="Zasaword"
              imgSrc="/images/Zasaword.jpg"
              imgAlt="Zasaword"
              youTubeLink="https://www.youtube.com/watch?v=NtImPglQvGY"
              externalLink="https://dantimus.itch.io/zasaword"
            >
              <p>
                Zasaword was an original word game for the iPhone which featured
                several different games modes. In each mode, players create
                words as quickly as possible from random letters which can also
                be saved for later use.
              </p>
              <p>
                I was the sole programmer, and collaborated on the UI design as
                well.
              </p>
              <p>
                An online demo version can be played &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dantimus.itch.io/zasaword"
                >
                  here
                </a>
                .
              </p>
            </Project>

            <Project
              id="MDSeries"
              title="Master Diagnostician Series"
              imgSrc="/images/MD_Series.jpg"
              imgAlt="Master Diagnostician Series"
              facebookLink="https://www.facebook.com/pages/category/Medical-Company/Beach-Rak-Medicine-LLC-202927129743831/"
              twitterLink=""
              youTubeLink=""
              gitHubLink=""
              externalLink=""
            >
              <p>
                Master Diagnostician Series was a set of medical training apps
                on which I collaborated. I developed the front-end and the mid
                tier controllers, as well as a data entry website which allowed
                our clients to easily enter and maintain their own data.
              </p>
            </Project>

            <Project
              id="LotusBlissYoga"
              title="Lotus Bliss Yoga"
              imgSrc="/images/LotusBlissYoga.jpg"
              imgAlt="Lotus Bliss Yoga"
              externalLink="http://lotusblissyoga.com/default.htm"
            >
              <p>
                I was hired to convert this website from an auto-generated HTML
                mess to simple HTML / CSS. I also incorporated Bootstrap to make
                it responsive, and created a new PHP contact form which uses
                reCAPTCHA.
              </p>
            </Project>

            <Project
              id="LostSoul"
              title="Ludum Dare 38:  Lost Soul"
              imgSrc="/images/LostSoul.jpg"
              imgAlt="Lost Soul"
              gitHubLink="https://github.com/drward4/LudumDare38"
              externalLink="https://ldjam.com/events/ludum-dare/38/lost-soul"
            >
              <p>
                Lost Soul is a game I created from scratch in a single weekend
                for the &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ldjam.com/events/ludum-dare/38"
                >
                  Ludum Dare 38
                </a>
                &nbsp; competition. The theme for this event, which was my also
                my first ever entry into Ludum Dare, was "A Small World". I went
                with the idea of playing as a child's soul trapped in its
                (former) bedroom, and possessing various toys in order to
                escape.
              </p>
              <p>
                The game can be downloaded &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/drive/folders/0BwLDm2tvRGtwRjgzWXpNNXNSRHc"
                >
                  here
                </a>
                .
              </p>
            </Project>

            <Project
              id="UntitledSong"
              title="Ludum Dare 45: Untitled Song"
              imgSrc="/images/UntitledSong.jpg"
              imgAlt="Ludum Dare 45: Untitled Song"
              gitHubLink="https://github.com/drward4/LudumDare45"
              externalLink="https://ldjam.com/events/ludum-dare/45/untitled-song"
            >
              <p>
                Untitled Song is a game I created from scratch in a single
                weekend for the &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ldjam.com/events/ludum-dare/45"
                >
                  Ludum Dare 45
                </a>
                &nbsp; competition. The theme was "Start With Nothing". My idea
                was to play as a composer with writer's block who must explore
                his room for inspiration, solving simple puzzles to unlock
                pieces of a new composition.
              </p>
              <p>
                The game can be played &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dantimus.itch.io/untitled-song"
                >
                  here
                </a>
                .
              </p>
            </Project>

            <Project
              id="Template"
              title="Template"
              imgSrc="/images/Portland_Office_3.jpg"
              imgAlt="Template"
              facebookLink=""
              twitterLink=""
              youTubeLink=""
              gitHubLink=""
              externalLink=""
            >
              <p>Template</p>
            </Project>
          </div>
        </PortfolioSection>
        <div id="FooterSection">
          <a href="#top">
            <i className="fa fa-arrow-circle-up"></i>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
