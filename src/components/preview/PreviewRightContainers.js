import React from "react";
import PreviewExperiences from "./PreviewExperiences";
import PreviewReferences from "./PreviewReferences";

function PreviewRightContainers({ contents }) {
  return (
    <>
      {contents.map((content, index) => {
        if (content.type === "experience") {
          return <PreviewExperiences key={index} experiences={content} />;
        } else if (content.type === "reference") {
          return <PreviewReferences key={index} references={content} />;
        }
      })}
    </>
  );
}

export default PreviewRightContainers;
