import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from "react-simple-dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [chosenPage, setChosenPage] = useState("aboutme");

  let dropdown = null;

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="textlogo-container">
          <Link to="/" onClick={closeMobileMenu}>
            J-Klejn
          </Link>
        </div>
      </div>
      <ul className={click ? "nav-options active" : "nav-options"}>
        <li
          className={`base-class ${
            chosenPage === "aboutme" ? "option--chosen" : "option"
          }`}
        >
          <Link
            to="aboutme"
            onClick={() => {
              closeMobileMenu();
              setChosenPage("aboutme");
            }}
          >
            O mnie
          </Link>
        </li>
        <li className="option">
          <Dropdown ref={(foo) => (dropdown = foo)}>
            <DropdownTrigger
              style={
                chosenPage.split("-")[0] === "projects"
                  ? { color: "black" }
                  : {}
              }
            >
              Projekty
            </DropdownTrigger>
            <DropdownContent>
              <ul>
                <li
                  className={`base-class ${
                    chosenPage === "projects-reactjs"
                      ? "option--chosen"
                      : "option"
                  }`}
                >
                  <Link
                    to="projects-reactjs"
                    onClick={() => {
                      dropdown.hide();
                      setChosenPage("projects-reactjs");
                    }}
                  >
                    React JS
                  </Link>
                </li>
                <li
                  className={`base-class ${
                    chosenPage === "projects-java" ? "option--chosen" : "option"
                  }`}
                >
                  <Link
                    to="projects-java"
                    onClick={() => {
                      dropdown.hide();
                      setChosenPage("projects-java");
                    }}
                  >
                    Java
                  </Link>
                </li>
                <li
                  className={`base-class ${
                    chosenPage === "projects-arduino"
                      ? "option--chosen"
                      : "option"
                  }`}
                >
                  <Link
                    to="projects-arduino"
                    onClick={() => {
                      dropdown.hide();
                      setChosenPage("projects-arduino");
                    }}
                  >
                    Arduino
                  </Link>
                </li>
              </ul>
            </DropdownContent>
          </Dropdown>
        </li>
        <li
          className={`base-class ${
            chosenPage === "contact" ? "option--chosen" : "option"
          }`}
        >
          <Link
            to="contact"
            onClick={() => {
              closeMobileMenu();
              setChosenPage("contact");
            }}
          >
            Kontakt
          </Link>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? "X" : "..."}
      </div>
    </div>
  );
}

export default Navbar;
