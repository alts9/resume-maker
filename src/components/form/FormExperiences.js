import React from "react";
import FormExperience from "./FormExperience";
import AddButton from "./element/AddButton";
function FormExperiences({ experiences, id, updateData, addData }) {
  function handleAdd() {
    addData({ category: "experience", mainId: id });
  }
  return (
    <>
      <div className="form-experience ">
        {" "}
        <div className="form-header">Experience</div>
        <div className="input-container">
          {experiences.items.map((experience, index) => {
            return (
              <FormExperience
                key={index}
                itemId={index}
                experience={experience}
                experienceId={id}
                updateData={updateData}
                addData={addData}
              />
            );
          })}
        </div>
        <AddButton handleAdd={handleAdd} text={"Add experience"} />
      </div>
    </>
  );
}

export default FormExperiences;
