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
        <li className="option">
          <Link to="aboutme" onClick={closeMobileMenu}>
            O mnie
          </Link>
        </li>
        <li className="option">
          <Dropdown ref={(foo) => (dropdown = foo)}>
            <DropdownTrigger>Projekty</DropdownTrigger>
            <DropdownContent>
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      dropdown.hide();
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
                    }}
                  >
                    Arduino
                  </Link>
                </li>
              </ul>
            </DropdownContent>
          </Dropdown>
        </li>
        <li className="option">
          <Link to="contact" onClick={closeMobileMenu}>
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
