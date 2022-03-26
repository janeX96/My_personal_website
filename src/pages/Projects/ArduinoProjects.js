import React, { useState } from "react";
import YouTube from "react-youtube";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import useMediaQuery from "use-mediaquery";

function ReactJSProjects() {
  const [chosenProject, setChosenProject] = useState(0);

  const resolutionMatches = useMediaQuery("(max-width:700px)");

  let vidOpts = resolutionMatches
    ? { height: "100%", width: "100%" }
    : { height: "390px", width: "640px" };
  const projects = () => {
    return [
      <article className="content__project-section">
        <h2>Wrzutnia biblioteczna</h2>
        <YouTube videoId="-e0UqLhcPsg" opts={vidOpts} />
        Opis
      </article>,
      <article className="content__project-section">
        <h2>Zdalnie sterowany pojazd</h2>
        <YouTube
          className="project-section__video"
          videoId="QusvDx2cOwg"
          opts={vidOpts}
        />
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
