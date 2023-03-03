import React from "react";

function Bio({ bio }) {
  return (
    <>
      <div className="">Preview</div>
      <div>Name: {bio.name}</div>
      <div className="">Job Title: {bio.jobTitle}</div>
    </>
  );
}

export default Bio;
