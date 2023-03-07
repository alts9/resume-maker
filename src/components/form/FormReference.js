import React from "react";
import TextInput from "./element/TextInput";
function FormReference({ itemId, reference, referenceId, updateReference }) {
  function handleChange(e) {
    updateReference(referenceId, itemId, e.target.name, e.target.value);
  }
  return (
    <>
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
    </>
  );
}

export default FormReference;
