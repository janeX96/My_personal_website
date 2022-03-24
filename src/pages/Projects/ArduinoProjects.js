import React, { useState } from "react";
import YouTube from "react-youtube";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

function ReactJSProjects() {
  const [chosenProject, setChosenProject] = useState(0);

  const projects = () => {
    return [
      <article className="content__project-section">
        <h2>Wrzutnia biblioteczna</h2>
        <YouTube videoId="-e0UqLhcPsg" opts={{ height: "390", width: "640" }} />
        Opis
      </article>,
      <article className="content__project-section">
        <h2>Zdalnie sterowany pojazd</h2>
        <YouTube videoId="QusvDx2cOwg" opts={{ height: "390", width: "640" }} />
      </article>,
    ];
  };

  const switchProject = (i) => {
    let projectIndex = chosenProject + i;
    console.log("index:", projectIndex);

    if (projectIndex < 0) {
      projectIndex = projects().length - 1;
    } else if (projectIndex > projects().length - 1) {
      projectIndex = 0;
      console.log("zmieniam na 0 bo: ", projectIndex, ">", projects.length - 1);
    }

    console.log("changed index:", projectIndex);
    setChosenProject(projectIndex);
  };

  return (
    <div className="content-container">
      <div
        className="content-container__content"
        style={{ alignItems: "center" }}
      >
        <div className="content__tech-name ">
          <h1>Arduino</h1>
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
