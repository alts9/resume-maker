import React from "react";
import FormInfos from "./FormInfos";
import FormLists from "./FormLists";

function FormLeftContainer({ contents, updateData, addData }) {
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
              updateData={updateData}
              addData={addData}
            />
          );
        } else if (content.type === "list") {
          return (
            <FormLists
              key={index}
              id={index}
              list={content}
              updateData={updateData}
              addData={addData}
            />
          );
        }
      })}
    </>
  );
}

export default FormLeftContainer;
