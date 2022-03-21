import React from "react";
import "../styles/App.scss";
import photo from "../images/photo.JPG";

const AboutMe = () => {
  return (
    <div className="content-container">
      <div className="content-container__content">
        <article
          style={{
            marginLeft: "30px",
            marginTop: "30px",
            display: "grid",
            "grid-template-columns": "repeat(3, 1fr)",
            "column-gap": "50px",
          }}
        >
          <img
            src={photo}
            alt="zzz"
            style={{
              height: "300px",
              border: "1px solid rgba(0, 0, 0, 0.15)",
              "grid-row-start": "1",
              "grid-row-end": "2",
            }}
          />
          <div style={{ width: "30em" }}>
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
        </article>
      </div>
    </div>
  );
};

export default AboutMe;
