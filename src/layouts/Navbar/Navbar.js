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
        <li
          className={`base-class ${
            chosenPage === "projects" ? "option--chosen" : "option"
          }`}
        >
          <Dropdown ref={(foo) => (dropdown = foo)}>
            <DropdownTrigger>Projekty</DropdownTrigger>
            <DropdownContent>
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      dropdown.hide();
                      setChosenPage("projects");
                    }}
                  >
                    React JS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      dropdown.hide();
                      setChosenPage("projects");
                    }}
                  >
                    Java
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      dropdown.hide();
                      setChosenPage("projects");
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
