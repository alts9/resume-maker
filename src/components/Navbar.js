import React from "react";
import "./Navbar.css";

function Navbar({ saveAsPDF }) {
  function handleHelp() {}
  function handleSave() {
    saveAsPDF();
  }
  return (
    <>
      <div className="navbar-container">
        <div className="main-logo">RESUME MAKER</div>
        <div className="nav-container">
          <button className="help-btn" onClick={handleHelp}>
            Help
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save as PDF
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
