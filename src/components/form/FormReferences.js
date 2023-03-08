import React from "react";
import FormReference from "./FormReference";

function FormReferences({ id, references, updateReference }) {
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
                updateReference={updateReference}
              />

        );
      })}
    </>
  );
}

export default FormReferences;
