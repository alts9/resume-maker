import React from "react";
import "./Preview.css";
import "./IconAlignment.css";
import PreviewBio from "./PreviewBio";
import PreviewContacts from "./PreviewContacts";
import PreviewProfile from "./PreviewProfile";
import PreviewLeftContainer from "./PreviewLeftContainer";
import PreviewRightContainers from "./PreviewRightContainers";
function Preview({ resume }) {
  return (
    <>
      <div className="preview-container show-border">
        <div className="resume-content show-border">
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
              <PreviewLeftContainer contents={resume.leftContents} />
            </div>
            <div className="right-container">
              <PreviewRightContainers contents={resume.rightContents} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
