import React from "react";
import PreviewInfos from "./PreviewInfos";
function PreviewLeftContainer({ contents }) {
  return (
    <>
      {contents.map((content, index) => {
        if (content.type === "info") {
          return <PreviewInfos key={index} info={content} />;
        }
      })}
    </>
  );
}

export default PreviewLeftContainer;
