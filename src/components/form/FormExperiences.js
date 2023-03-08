import React from "react";
import FormExperience from "./FormExperience";

function FormExperiences({ experiences, id, updateData }) {
  return (
    <>
      <div className="form-header">Experience</div>
      {experiences.items.map((experience, index) => {
        return (
          <FormExperience
            key={index}
            itemId={index}
            experience={experience}
            experienceId={id}
            updateData={updateData}
          />
        );
      })}
    </>
  );
}

export default FormExperiences;
