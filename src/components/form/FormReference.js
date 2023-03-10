import React from "react";
import TextInput from "./element/TextInput";
function FormReference({ itemId, reference, referenceId, updateData }) {
  function handleChange(e) {
    updateData({
      category: "reference",
      mainId: referenceId,
      subId: itemId,
      property: e.target.name,
      newValue: e.target.value,
    });
  }
  return (
    <>
      <div className="input-item">
        <div>
          <TextInput
            labelText="Name:"
            inputName="name"
            inputOnChange={handleChange}
            inputDefault={reference.name}
          />
          <TextInput
            labelText="Job Title:"
            inputName="jobTitle"
            inputOnChange={handleChange}
            inputDefault={reference.jobTitle}
          />
          <TextInput
            labelText="Company:"
            inputName="companyName"
            inputOnChange={handleChange}
            inputDefault={reference.companyName}
          />
          <TextInput
            labelText="Phone:"
            inputName="phone"
            inputOnChange={handleChange}
            inputDefault={reference.phone}
          />
          <TextInput
            labelText="Email:"
            inputName="email"
            inputOnChange={handleChange}
            inputDefault={reference.email}
          />
        </div>
      </div>
      <button className="remove">X</button>
    </>
  );
}

export default FormReference;
