import React from "react";
import FormExperience from "./FormExperience";
import AddButton from "./element/AddButton";
function FormExperiences({ experiences, id, updateData, addData, removeData }) {
  function handleAdd() {
    addData({ category: "experience", mainId: id });
  }
  function handleRemove() {
    removeData({ category: "formExperience", mainId: id });
  }
  return (
    <>
      <div className="form-experience ">
        {" "}
        <div className="form-header">
          Experience{" "}
          <button onClick={handleRemove} className="removeBtn">
            X
          </button>
        </div>
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
                removeData={removeData}
              />
            );
          })}
        </div>
        <AddButton handleAdd={handleAdd} text={"Add experience Item"} />
      </div>
    </>
  );
}

export default FormExperiences;
