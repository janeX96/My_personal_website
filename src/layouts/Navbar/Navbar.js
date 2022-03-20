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
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            J-Klejn
          </Link>
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
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
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
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? "X" : "..."}
      </div>
    </div>
  );
}

export default Navbar;
