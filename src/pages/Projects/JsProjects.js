import React, { useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

function JsProjects(props) {
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

  const projectsGallery = [];

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
          <h2>gra</h2>
          <p>Gra typu tower defense napisana w html, javaScript i css</p>
          <p>
            <a href="towerDefense.html">Zagraj (tylko PC)</a>
          </p>
        </div>

        {/* {gallerySection()}
        {linkSection(
          "https://github.com/janeX96/praca-inzynierska_wynayemnik-react"
        )} */}
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
      <div
        className="content-container__content"
        style={{ alignItems: "center" }}
      >
        <div className="content__tech-name ">
          <h1>JavaScript</h1>
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

export default JsProjects;
