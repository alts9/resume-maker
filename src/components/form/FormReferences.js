import React from "react";
import FormReference from "./FormReference";
import AddButton from "./element/AddButton";
function FormReferences({ id, references, updateData, addData, removeData }) {
  function handleAdd() {
    addData({ category: "reference", mainId: id });
  }
  function handleRemove() {
    removeData({ category: "formExperience", mainId: id });
  }
  return (
    <>
      <div className="form-reference ">
        {" "}
        <div className="form-header">
          Reference{" "}
          <button onClick={handleRemove} className="removeBtn">
            X
          </button>
        </div>
        <div className="input-container">
          {" "}
          {references.items.map((reference, index) => {
            return (
              <FormReference
                key={index}
                itemId={index}
                reference={reference}
                referenceId={id}
                updateData={updateData}
                removeData={removeData}
              />
            );
          })}
          <AddButton handleAdd={handleAdd} text={"Add reference item"} />
        </div>
      </div>
    </>
  );
}

export default FormReferences;
