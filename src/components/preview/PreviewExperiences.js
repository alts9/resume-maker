import React from "react";
import PreviewExperience from "./PreviewExperience";

function PreviewExperiences({ experiences }) {
  return (
    <>
      <section className="experience-container">
        <div className="title">Experience</div>
        <div className="spacer"></div>
        {experiences.items.map((experience, id) => {
          return <PreviewExperience key={id} experience={experience} />;
        })}
      </section>
    </>
  );
}

export default PreviewExperiences;
