import React, { useState } from "react";
import "../styles/App.scss";
import photo from "../images/photo.JPG";

const AboutMe = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showInterests, setShowInterests] = useState(false);

  const changeDetailsShow = (d) => {
    switch (d) {
      case "exp":
        setShowExperience(!showExperience);
        setShowEducation(false);
        setShowSkills(false);
        setShowInterests(false);
        break;
      case "edu":
        setShowEducation(!showEducation);
        setShowExperience(false);
        setShowSkills(false);
        setShowInterests(false);
        break;
      case "skills":
        setShowSkills(!showSkills);
        setShowEducation(false);
        setShowExperience(false);
        setShowInterests(false);
        break;

      case "ints":
        setShowInterests(!showInterests);
        setShowSkills(false);
        setShowEducation(false);
        setShowExperience(false);
        break;

      default:
        return null;
    }
  };

  return (
    <div className="content-container">
      <div className="content-container__content">
        <article className="aboutme-section">
          <img src={photo} alt="zzz" />
          <div className="aboutme-section__description">
            <h1>Jan Klejn</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              iaculis, ipsum a suscipit fermentum, erat massa semper libero, at
              fermentum elit risus sed neque. Vivamus porttitor, dui at luctus
              cursus, ipsum diam porta magna, vitae laoreet enim ligula et
              sapien. Proin congue purus semper iaculis cursus. Aliquam vitae
              urna lacus. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Quisque in dui ac velit sagittis
              iaculis. Donec sed sodales ipsum. Sed sem urna, interdum eget
              consequat a, dignissim in ligula. Etiam varius quam lorem, eget
              tempor ante aliquam sit amet.
            </p>
          </div>
          <dl className="aboutme-section__details">
            <dt
              className={`base-class ${
                showExperience ? "dt--chosen" : "dt--available"
              }`}
              onClick={() => changeDetailsShow("exp")}
            >
              Doświadczenie
            </dt>
            {showExperience && <dd>experience info</dd>}

            <dt
              className={`base-class ${
                showEducation ? "dt--chosen" : "dt--available"
              }`}
              onClick={() => changeDetailsShow("edu")}
            >
              Wykształcenie
            </dt>
            {showEducation && <dd>edu info</dd>}

            <dt
              className={`base-class ${
                showSkills ? "dt--chosen" : "dt--available"
              }`}
              onClick={() => changeDetailsShow("skills")}
            >
              Umiejętności
            </dt>
            {showSkills && <dd>skills</dd>}

            <dt
              className={`base-class ${
                showInterests ? "dt--chosen" : "dt--available"
              }`}
              onClick={() => changeDetailsShow("ints")}
            >
              Zainteresowania
            </dt>
            {showInterests && <dd>interests</dd>}
          </dl>
        </article>
      </div>
    </div>
  );
};

export default AboutMe;
