import React from "react";
import FormInfos from "./FormInfos";

function FormLeftContainer({ contents, updateInfoTitle, updateInfoItem }) {
  return (
    <>
      <div>FormLeftContainer</div>
      {contents.map((content, index) => {
        if (content.type === "info") {
          return (
            <FormInfos
              key={index}
              id={index}
              info={content}
              updateInfoTitle={updateInfoTitle}
              updateInfoItem={updateInfoItem}
            />
          );
        } else if (content.type === "list") {
        }
      })}
    </>
  );
}

export default FormLeftContainer;
