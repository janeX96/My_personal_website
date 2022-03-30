import React from "react";
import { AiFillGithub } from "react-icons/ai";

function LinkSection(git) {
  return (
    <div className="project-section__links">
      <a href={git}>
        <AiFillGithub style={{ fontSize: "24px" }} />
        <b> Github</b>
      </a>
    </div>
  );
}

export default LinkSection;
