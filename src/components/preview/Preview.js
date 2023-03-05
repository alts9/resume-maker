import React from "react";
import "./Preview.css";
import PreviewBio from "./PreviewBio";
import PreviewContacts from "./PreviewContacts";
import PreviewProfile from "./PreviewProfile";
import PreviewLeftContainer from "./PreviewLeftContainer";
function Preview({ resume }) {
  return (
    <>
      <div className="preview-container">
        <div className="resume-content">
          <section className="header">
            <PreviewBio bio={resume.bio} />
          </section>
          <section className="contact">
            <PreviewContacts contact={resume.contact} />
          </section>
          <section className="profile">
            <PreviewProfile profile={resume.profile} />
          </section>
          <div className="container">
            <div className="left-container">
              <PreviewLeftContainer contents={resume.leftContent} />
            </div>
            <div className="right-container"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
