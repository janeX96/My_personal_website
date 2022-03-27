import React, { useState } from "react";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

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

  const projectsGallery = [Object.values(wynaymenikGallery).sort()];

  const switchPhoto = (i) => {
    console.log("sss");
    let photoIndex = chosenPhoto + i;

    if (photoIndex < 0) {
      photoIndex = projectsGallery[chosenProject].length - 1;
    } else if (photoIndex > projectsGallery[chosenProject].length - 1) {
      photoIndex = 0;
    }

    setchosenPhoto(photoIndex);
  };

  const projects = () => {
    return [
      <article className="content__project-section">
        <h2>wynayemnik.pl</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
        tellus ultricies, tincidunt mi vitae, aliquet felis. Suspendisse
        condimentum consectetur aliquam. Aenean odio nunc, tincidunt vel quam
        eget, venenatis accumsan ligula. Proin rhoncus at felis nec euismod. Sed
        varius justo ac orci iaculis congue. Nullam finibus felis metus.
        <div className="project-section__gallery">
          <MdArrowBackIos
            className="gallery-arrow"
            onClick={() => switchPhoto(-1)}
          />
          <img
            src={projectsGallery[chosenProject][chosenPhoto]}
            alt="..."
            style={{ width: "600px" }}
            onClick={() => setShowBigPhoto(true)}
          />
          <MdArrowForwardIos
            className="gallery-arrow"
            onClick={() => switchPhoto(1)}
          />
        </div>
      </article>,
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
        {projects()[chosenProject]}
      </div>
    </div>
  );
}

export default ReactJSProjects;
