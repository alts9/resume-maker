import React from "react";
import FormExperiences from "./FormExperiences";
import FormReferences from "./FormReferences";
function FormRightContainer({
  contents,
  updateExperienceInfo,
  updateExperienceList,
  updateReference,
}) {
  return (
    <>
      <div className="">Form Right Container</div>
      {contents.map((content, index) => {
        if (content.type === "experience") {
          return "";
          // <FormExperiences
          //   key={index}
          //   id={index}
          //   experiences={content}
          //   updateExperienceInfo={updateExperienceInfo}
          //   updateExperienceList={updateExperienceList}
          // />
        } else if (content.type === "reference") {
          return (
            <FormReferences
              key={index}
              id={index}
              references={content}
              updateReference={updateReference}
            />
          );
        }
      })}
    </>
  );
}
export default FormRightContainer;
