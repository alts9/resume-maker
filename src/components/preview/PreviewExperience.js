import React from "react";
import PreviewExperienceList from "./PreviewExperienceList";

function PreviewExperience({ experience }) {
  return (
    <>
      <div className="experience-item">
        <div className="job-title">{experience.jobTitle}</div>
        <div className="info">
          <span className="company-name">{experience.companyName} / </span>
          <span className="location">{experience.location} / </span>
          <span className="year">
            {experience.yearStart}
            {experience.yearEnd !== "" ? "- " + experience.yearEnd : ""}
          </span>
        </div>
        <div className="summary">{experience.jobSummary}</div>
        <ul className="details-container">
          {experience.jobDetails.map((listItem, id) => {
            return <PreviewExperienceList key={id} listItem={listItem} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default PreviewExperience;
