import React from "react";
import FormReference from "./FormReference";

function FormReferences({ id, references, updateData }) {
  return (
    <>
      <div className="form-header">Reference</div>
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
    </>
  );
}

export default FormReferences;
