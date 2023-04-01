import React from "react";
import "./Navbar.css";
import Modal from "./Modal";

function Navbar({ saveAsPDF }) {
  function handleSave() {
    saveAsPDF();
  }
  return (
    <>
      <div className="navbar-container">
        <div className="main-logo">RESUME MAKER</div>
        <div className="nav-container">
          <Modal />
          <button className="save-btn" onClick={handleSave}>
            Download as PDF
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
