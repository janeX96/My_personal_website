import React, { useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

function ReactJSProjects(props) {
  const [chosenProject, setChosenProject] = useState(0);
  const [chosenPhoto, setchosenPhoto] = useState(0);
  const [showBigPhoto, setShowBigPhoto] = useState(false);

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const wynaymenikGallery = importAll(
    require.context("../../images/wynayemnik", false, /\.(png|jpe?g|svg)$/)
  );
  const jklejnGallery = importAll(
    require.context("../../images/j-klejn", false, /\.(png|jpe?g|svg)$/)
  );
  const projectsGallery = [
    Object.values(wynaymenikGallery).sort(),
    Object.values(jklejnGallery).sort(),
  ];

  const switchPhoto = (i) => {
    let photoIndex = chosenPhoto + i;

    if (photoIndex < 0) {
      photoIndex = projectsGallery[chosenProject].length - 1;
    } else if (photoIndex > projectsGallery[chosenProject].length - 1) {
      photoIndex = 0;
    }

    setchosenPhoto(photoIndex);
  };

  const gallerySection = () => {
    if (projectsGallery[chosenProject] !== undefined)
      return (
        <div className="project-section__gallery">
          <MdArrowBackIos
            className="gallery-arrow"
            onClick={() => switchPhoto(-1)}
          />
          <img
            src={projectsGallery[chosenProject][chosenPhoto]}
            alt="..."
            onClick={() => setShowBigPhoto(true)}
          />
          <MdArrowForwardIos
            className="gallery-arrow"
            onClick={() => switchPhoto(1)}
          />
        </div>
      );
  };

  const linkSection = (git) => {
    return (
      <div className="project-section__links">
        <a href={git}>
          <AiFillGithub style={{ fontSize: "24px" }} />
          <b> Github</b>
        </a>
      </div>
    );
  };

  const projects = () => {
    return [
      <>
        <div className="project-section__description">
          <h2>wynayemnik.pl</h2>
          <p>
            Jest to aplikacja do zarządzania wynajmem powierzchni
            mieszkaniowo-usługowych. Stworzona została przez 3-osobowy zespół w
            ramach pracy inżynierskiej. System ma za zadanie przechowywać
            informacje na temat lokali jakie posiadamy, wynajmować je, naliczać
            różnego rodzaju opłaty i generować faktury do zewnętrznego API.
            Użytkownik ma do dyspozycji 3 role: właściciel, administrator i
            najemca. Będąc właścicielem możemy dodawać do bazy adresy i
            podłączone pod nie mieszkania, zarządzać wynajmami, opłatami oraz
            pracą administratorów. Rola administratora powstała na potrzeby
            zatrudnienia osób do pomocy w zarządzaniu większą ilością lokali,
            właściciel może nadać rolę administratora innemu użytkownikowi
            przydzielając mu uprawnienia do zarządzania konkretnymi lokalami.
            Jako najemca mamy jedynie możliwość wglądu do wynajmów, które są z
            nami powiązane i do szczegółów płatności jeśli zostały nam one
            udostępnione przez wynajmującego (właściciela lokalu).
            <br />
            <br />
            Back-end został zrealizowany przy pomocy <b>Spring Boot</b>, jako
            bazę danych wybraliśmy <b>PostgreSQL</b>.
            <br />
            Moim zadaniem było zrealizowanie części front-endowej, co dało mi
            szansę na poznanie języka JavaScript oraz odkrycie możliwości, jakie
            oferuje biblioteka ReactJS. Do budowy front-endu wykorzystano
            <b> create-react-app</b>.
          </p>
        </div>

        {gallerySection()}
        {linkSection(
          "https://github.com/janeX96/praca-inzynierska_wynayemnik-react"
        )}
      </>,

      <>
        <div className="project-section__description">
          <h2>J-Klejn (ta strona)</h2>
          <p>
            Strona na której się znajdujemy jest niczym innym jak klientem
            powstałym w creat-react-app. Póki co jest ona jeszcze w surowym
            stanie, a dane są zahardkodowane. W niedalekiej przyszłości planuję
            poszerzyć funkcjonalność strony (np. artykuły technologiczne), co
            będzie się wiązało z użyciem REST API (najprawdopodobniej node.js) i
            bazy danych.
          </p>
        </div>
        {gallerySection()}
        {linkSection("https://github.com/janeX96/My_personal_website")}
      </>,
    ];
  };

  const switchProject = (i) => {
    let projectIndex = chosenProject + i;

    if (projectIndex < 0) {
      projectIndex = projects().length - 1;
    } else if (projectIndex > projects().length - 1) {
      projectIndex = 0;
    }

    setChosenProject(projectIndex);
  };

  return (
    <div className="content-container">
      {showBigPhoto && (
        <div className="big-photo">
          <MdArrowBackIos
            className="switch-arrow"
            onClick={() => switchPhoto(-1)}
          />
          <img
            src={projectsGallery[chosenProject][chosenPhoto]}
            alt="..."
            onClick={() => setShowBigPhoto(false)}
          />
          <MdArrowForwardIos
            className="switch-arrow"
            onClick={() => switchPhoto(1)}
          />
        </div>
      )}

      <div
        className="content-container__content"
        style={{ alignItems: "center" }}
      >
        <div className="content__tech-name ">
          <h1>React JS</h1>
          <div className="content__pagination-container">
            <BsArrowLeftSquare
              className="pagination-icon"
              onClick={() => switchProject(-1)}
            />

            <BsArrowRightSquare
              className="pagination-icon"
              onClick={() => switchProject(1)}
            />
          </div>
        </div>
        <article className="content__project-section">
          {projects()[chosenProject]}
        </article>
      </div>
    </div>
  );
}

export default ReactJSProjects;
