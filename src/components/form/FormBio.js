import React from "react";
import TextInput from "./element/TextInput";

function FormBio({ bio, updateBio }) {
  function handleChange(e) {
    updateBio(e.target.name, e.target.value);
  }
  return (
    <>
      <TextInput
        labelText="Name:"
        inputName="name"
        inputOnChange={handleChange}
        inputDefault={bio.name}
      />
      <TextInput
        labelText="Job Title:"
        inputName="jobTitle"
        inputOnChange={handleChange}
        inputDefault={bio.jobTitle}
      />
    </>
  );
}

export default FormBio;
