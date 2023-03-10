import React from "react";
import FormReference from "./FormReference";
import AddButton from "./element/AddButton";
function FormReferences({ id, references, updateData, addData }) {
  function handleAdd() {
    addData({ category: "reference", mainId: id });
  }
  return (
    <>
      <div className="form-reference ">
        {" "}
        <div className="form-header">Reference</div>
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
              />
            );
          })}
          <AddButton handleAdd={handleAdd} text={"Add reference"} />
        </div>
      </div>
    </>
  );
}

export default FormReferences;
