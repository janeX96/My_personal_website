import React, { useState, useEffect } from "react";
import "../styles/App.scss";
import photo from "../images/photo.JPG";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

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
              W trakcie studiów informatycznych zdobyłem doświadczenie w
              wytwarzaniu oprogramowania z wykorzystaniem języka Java.
              Realizowałem projekty Rest Api przy użyciu frameworka Spring Boot.
              Przez ostatnie 5 miesięcy szkoliłem się w języku JavaScript. W
              moim zespole projektowym pracy inżynierskiej byłem odpowiedzialny
              za front-end aplikacji, który realizowałem z wykorzystaniem
              biblioteki React JS. Aktualnie poszukuję stanowiska, na którym
              mógłbym rozwijać swoje umiejętności w zakresie technologii
              front-endowych.
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
            {showExperience && (
              <dd>
                <b>11.2020 – 02.2021 [4 mies.]</b> <br />
                <b>Programista C++</b> w B.A.T. MAREK ELIS
                <br />
                Krótki opis:
                <br />
                <b>
                  Projektowanie i programowanie prototypu wrzutni bibliotecznej
                  z wykorzystaniem platformy Arduino
                </b>
              </dd>
            )}

            <dt
              className={`base-class ${
                showEducation ? "dt--chosen" : "dt--available"
              }`}
              onClick={() => changeDetailsShow("edu")}
            >
              Wykształcenie
            </dt>
            {showEducation && (
              <dd>
                <b>10.2018 – 02.2022</b> [3 lata 5 mies.]
                <br />
                <b>Polsko-Japońska Akademia Technik Komputerowych</b>
                <br />
                Kierunek: <b>Informatyka</b>
                <br />
                Specjalizacja: <b>Bazy danych</b>
                <br />
                Tytuł: <b>Inżynier</b>
              </dd>
            )}

            <dt
              className={`base-class ${
                showSkills ? "dt--chosen" : "dt--available"
              }`}
              onClick={() => changeDetailsShow("skills")}
            >
              Umiejętności
            </dt>
            {showSkills && (
              <dd>
                Java: <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <br />
                JavaScript: <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <FaRegStar />
                <br />
                HTML: <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <FaRegStar />
                <br />
                CSS: <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <FaRegStar />
              </dd>
            )}

            <dt
              className={`base-class ${
                showInterests ? "dt--chosen" : "dt--available"
              }`}
              onClick={() => changeDetailsShow("ints")}
            >
              Zainteresowania
            </dt>
            {showInterests && (
              <dd>
                Technologia, Robotyka, Animacja poklatkowa, Geologia, E-sport,
                DIY.
              </dd>
            )}
          </dl>
        </article>
      </div>
    </div>
  );
};

export default AboutMe;
