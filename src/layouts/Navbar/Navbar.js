import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from "react-simple-dropdown";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [chosenPage, setChosenPage] = useState("aboutme");

  const changeChosenTab = (t) => {
    setChosenPage(t);
  };

  let dropdown = null;

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="textlogo-container">
          <Link
            to="/"
            onClick={() => {
              closeMobileMenu();
              changeChosenTab("aboutme");
            }}
          >
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
              changeChosenTab("aboutme");
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
                    chosenPage === "projects-javascript"
                      ? "option--chosen"
                      : "option"
                  }`}
                >
                  <Link
                    to="projects-javascript"
                    onClick={() => {
                      dropdown.hide();
                      changeChosenTab("projects-javascript");
                      closeMobileMenu();
                    }}
                  >
                    JavaScript
                  </Link>
                </li>
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
                      changeChosenTab("projects-reactjs");
                      closeMobileMenu();
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
                      changeChosenTab("projects-java");
                      closeMobileMenu();
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
                      changeChosenTab("projects-arduino");
                      closeMobileMenu();
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
              changeChosenTab("contact");
            }}
          >
            Kontakt
          </Link>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <div className="menu-icon">
            <MdClose />
          </div>
        ) : (
          <div className="menu-icon">
            <AiOutlineMenu />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
