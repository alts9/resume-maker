import React from "react";
import Bio from "./Bio";
function Preview({ resume }) {
  return (
    <>
      <div className="preview">
      <Bio bio={resume.bio} />
      </div>
    </>
  );
}

export default Preview;
