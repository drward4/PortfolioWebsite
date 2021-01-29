import React from "react";
import PortfolioSection from "./components/PortfolioSection";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project from "./components/Project";
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
              <div>DANIEL WARD</div>
              <div className="about-section-job-title">SOFTWARE DEVELOPER</div>
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
            <div className="about-section-links">
              <a href="https://github.com/drward4">
                <i className="fa fa-github about-section-link"></i>
              </a>
              <a href="https://www.linkedin.com/in/daniel-ward-64299b139/">
                <i className="fa fa-linkedin about-section-link"></i>
              </a>
            </div>
          </div>
        </PortfolioSection>
        <PortfolioSection id="ExperienceSection" title="EXPERIENCE">
          <div className="experience-container">
            <div className="experience-description">
              I've been in the industry since the year 2000 and have worked with
              a broad range of technologies in a variety of fields. In recent
              years I've mainly been developing cross-platform mobile games and
              applications using Unity and C#. I've also previously worked at
              several major corporations creating internal web applications with
              ASP.Net and SQL.
            </div>
            <div>
              <h4>TECHNOLOGIES I'VE WORKED WITH:</h4>
            </div>
            <SkillsGroup />
          </div>
        </PortfolioSection>
        <PortfolioSection id="WorkSection" title="WORK / PROJECTS">
          <div className="projects-group-container">
            <Project
              id="XenonMoon"
              title="Xenon Moon"
              imgSrc="/images/XenonMoon_predator_2.jpg"
              sliderSrc="
              /images/XenonMoon_predator_2.jpg,
              /images/XenonMoon_roaming.jpg,
              /images/XenonMoon_mastermind.jpg,
              /images/XenonMoon_outpost.jpg,
              /images/XenonMoon_service.jpg,
              /images/XenonMoon_base.jpg,
              /images/XenonMoon_episode_art.jpg
              "
              imgAlt="Xenon Moon"
              iOSLink="https://apps.apple.com/ie/app/xenon-moon/id1491049830"
              goolePlayLink="https://play.google.com/store/apps/details?id=media.dailydigitallimited.xenonmoon"
              facebookLink=""
              twitterLink=""
              youTubeLink="https://www.youtube.com/channel/UCg42Ahq3sGFyws47iPFtHwQ"
              gitHubLink=""
              externalLink="http://dailydigital.games/"
              techList="Unity, C#, Blender, Photoshop"
            >
              <p>
                Xenon Moon is a 3D action / exploration game I created with
                several others (I'm was the sole programmer). Some features
                include procedural 3D world creation, 2D puzzles, craft
                upgrades, combat with enemy AI, and an in-depth written story.
              </p>
            </Project>

            <Project
              id="JamSpring"
              title="JamSpring"
              imgSrc="/images/JamSpring_Virtual_Guitar.jpg"
              sliderSrc="/images/JamSpring_Virtual_Guitar.jpg,/images/JamSpring_Multi_Track.jpg,/images/JamSpring_Chord_Progressions.jpg,/images/JamSpring_Mixer.jpg"
              imgAlt="JamSpring"
              facebookLink="https://www.facebook.com/JamSpringNetwork"
              youTubeLink="https://www.youtube.com/watch?v=A3bEDSrtLi4"
              techList="Unity, C#, Photoshop"
            >
              <p>
                JamSpring is a guitar / music app I created with several others
                (I was the sole programmer). It automatically determines the key
                of live music and connects users with a range of style-based
                suggestions for the guitar.
              </p>
              <p>
                Key Features include: Multi-track Recording Studio; Automatic
                Key Detection; Interactive Virtual Guitar; Chord Progression
                Generator; Style Based Suggestions for Progressions, Chords, and
                Scales; Email based Collaboration with other JamSpring Users.
              </p>
            </Project>

            <Project
              id="Zasaword"
              title="Zasaword"
              imgSrc="/images/Zasaword_1.jpg"
              sliderSrc="/images/Zasaword_1.jpg,/images/Zasaword_2.jpg,/images/Zasaword_3.jpg"
              imgAlt="Zasaword"
              youTubeLink="https://www.youtube.com/watch?v=NtImPglQvGY"
              externalLink="https://dantimus.itch.io/zasaword"
              techList="Objective C (Originally), Unity, C#, Photoshop"
            >
              <p>
                Zasaword is an original word game in which players create words
                as quickly as possible from random letters, while saving the
                best letters for later use. It features several unique game
                modes with different rules. One mode, for instance, requires
                every word to be an exact number of letters.
              </p>
              <p>
                I was the sole programmer, and collaborated on the UI design as
                well.
              </p>
              <p>
                An online demo version can be played at &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dantimus.itch.io/zasaword"
                >
                  https://dantimus.itch.io/zasaword
                </a>
                .
              </p>
            </Project>

            <Project
              id="MDSeries"
              title="Master Diagnostician Series"
              imgSrc="/images/MD_Series_Anemia_1.jpg"
              sliderSrc="/images/MD_Series_Anemia_1.jpg,/images/MD_Series_Anemia_2.jpg,/images/MD_Series_Kidney_1.jpg,/images/MD_Series_Kidney_2.jpg"
              imgAlt="Master Diagnostician Series"
              facebookLink="https://www.facebook.com/pages/category/Medical-Company/Beach-Rak-Medicine-LLC-202927129743831/"
              twitterLink=""
              youTubeLink=""
              gitHubLink=""
              externalLink=""
              techList="Objective C, SQLite, ASP.Net, MySQL, HTML / JS / CSS, Photoshop, Blender"
            >
              <p>
                Master Diagnostician Series was a set of medical training apps
                on which I collaborated. I developed the front-end and the mid
                tier controllers, as well as a data entry website which allowed
                our clients to easily enter and maintain their own data.
              </p>
              <p>
                The platform was designed such that entirely new apps could be
                generated simply by swapping out the database and changing a few
                images.
              </p>
            </Project>

            <Project
              id="LotusBlissYoga"
              title="Lotus Bliss Yoga"
              imgSrc="/images/LotusBlissYoga.jpg"
              imgAlt="Lotus Bliss Yoga"
              externalLink="http://lotusblissyoga.com/"
              techList="WordPress; Originally: HTML, CSS, Bootstrap, PHP"
            >
              <p>
                I was hired to convert this website from an auto-generated HTML
                mess to simple HTML / CSS. I also incorporated Bootstrap, made
                it responsive, and created a new PHP contact form which uses
                reCAPTCHA. I've since converted to the site to WordPress.
              </p>
            </Project>

            <Project
              id="PortfolioSite"
              title="Portfolio Site"
              imgSrc="/images/PortfolioSite.jpg"
              imgAlt="Portfolio Site"
              externalLink=""
              techList="React, HTML, CSS"
            >
              <p>
                I created my portfolio (this site) as an exercise in developing
                with React and incorporating responsive design.
              </p>
            </Project>

            <Project
              id="LostSoul"
              title="Ludum Dare 38:  Lost Soul"
              imgSrc="/images/LostSoul_1.jpg"
              sliderSrc="/images/LostSoul_1.jpg,/images/LostSoul_2.jpg,/images/LostSoul_3.jpg"
              imgAlt="Lost Soul"
              gitHubLink="https://github.com/drward4/LudumDare38"
              externalLink="https://ldjam.com/events/ludum-dare/38/lost-soul"
              techList="Unity, C#, Blender, Photoshop"
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
                (former) bedroom, and possessing various toys in order to solve
                a simple puzzle and escape.
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
              imgSrc="/images/UntitledSong_1.jpg"
              sliderSrc="/images/UntitledSong_1.jpg,/images/UntitledSong_2.jpg,/images/UntitledSong_3.jpg,/images/UntitledSong_4.jpg"
              imgAlt="Ludum Dare 45: Untitled Song"
              gitHubLink="https://github.com/drward4/LudumDare45"
              externalLink="https://ldjam.com/events/ludum-dare/45/untitled-song"
              techList="Unity, C#, Blender, Photoshop"
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
                The game can be played at &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dantimus.itch.io/untitled-song"
                >
                  https://dantimus.itch.io/untitled-song
                </a>
                .
              </p>
            </Project>

            {/* 
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
              techList=""
            >
              <p>Template</p>
            </Project> 
            */}
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
