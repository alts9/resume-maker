import React from "react";
import FormInfos from "./FormInfos";
import FormLists from "./FormLists";

function FormLeftContainer({
  contents,
  updateTitle,
  updateInfoItem,
  updateListItem,
}) {
  return (
    <>
      <div className="form-header">Left Column</div>
      {contents.map((content, index) => {
        if (content.type === "info") {
          return (
            <FormInfos
              key={index}
              id={index}
              info={content}
              updateTitle={updateTitle}
              updateInfoItem={updateInfoItem}
            />
          );
        } else if (content.type === "list") {
          return (
            <FormLists
              key={index}
              id={index}
              list={content}
              updateTitle={updateTitle}
              updateListItem={updateListItem}
            />
          );
        }
      })}
    </>
  );
}

export default FormLeftContainer;
