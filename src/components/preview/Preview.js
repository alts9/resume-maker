import React from "react";
import Bio from "./PreviewBio";
import "./Preview.css";
import PreviewContacts from "./PreviewContacts";
function Preview({ resume }) {
  return (
    <>
      <div className="preview-container">
        <div className="resume-content">
          <div className="header">
            <Bio bio={resume.bio} />
          </div>
          <div className="contact">
            <PreviewContacts contact = {resume.contact}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
