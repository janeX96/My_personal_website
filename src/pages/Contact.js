import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Contact() {
  return (
    <div className="content-container">
      <div className="content-container__content">
        <address
          style={{
            padding: "10%",
            fontSize: "24px",
          }}
        >
          <a href="mailto:janek.klejn@gmail.com">
            <AiOutlineMail /> janek.klejn@gmail.com
          </a>
          <br />
          <a href="tel:604-676-086">
            <AiOutlinePhone /> 604 676 086
          </a>
          <br />
          <a href="https://www.linkedin.com/in/jan-klejn-124a72150/">
            <AiOutlineLinkedin style={{ fontSize: "32px" }} />
          </a>
        </address>
      </div>
    </div>
  );
}

export default Contact;
