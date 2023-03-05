import React from "react";
import PreviewInfos from "./PreviewInfos";
import PreviewLists from "./PreviewLists";
function PreviewLeftContainer({ contents }) {
  return (
    <>
      {contents.map((content, index) => {
        if (content.type === "info") {
          return <PreviewInfos key={index} info={content} />;
        } else if (content.type === "list") {
          return <PreviewLists key={index} list={content} />;
        }
      })}
    </>
  );
}

export default PreviewLeftContainer;
