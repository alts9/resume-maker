import React from "react";

function PreviewBio({ bio }) {
  return (
    <>
      <div className="name">{bio.name}</div>
      <div className="jobTitle">{bio.jobTitle}</div>
    </>
  );
}

export default PreviewBio;
