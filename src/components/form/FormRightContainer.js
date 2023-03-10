import React from "react";
import FormExperiences from "./FormExperiences";
import FormReferences from "./FormReferences";
function FormRightContainer({ contents, updateData, addData }) {
  return (
    <>
      <div className="form-header">Right Column</div>
      {contents.map((content, index) => {
        if (content.type === "experience") {
          return (
            <FormExperiences
              key={index}
              id={index}
              experiences={content}
              updateData={updateData}
              addData={addData}
            />
          );
        } else if (content.type === "reference") {
          return (
            <FormReferences
              key={index}
              id={index}
              references={content}
              updateData={updateData}
              addData={addData}
            />
          );
        }
      })}
    </>
  );
}
export default FormRightContainer;
