import React from "react";
import FormExperiences from "./FormExperiences";
function FormRightContainer({
  contents,
  updateExperienceInfo,
  updateExperienceList,
}) {
  return (
    <>
      <div className="">Form Right Container</div>
      {contents.map((content, index) => {
        if (content.type === "experience") {
          return (
            <FormExperiences
              key={index}
              id={index}
              experiences={content}
              updateExperienceInfo={updateExperienceInfo}
              updateExperienceList={updateExperienceList}
            />
          );
        }
      })}
    </>
  );
}
export default FormRightContainer;
