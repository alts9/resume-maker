import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      {year} -{" "}
      <a href={"https://github.com/alts9"}>
        <FaGithub /> Alts9
      </a>
    </footer>
  );
}

export default Footer;
