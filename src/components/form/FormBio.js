import React from "react";
import TextInput from "./element/TextInput";

function FormBio({ bio, updateData }) {
  function handleChange(e) {
    updateData({
      property: e.target.name,
      newValue: e.target.value,
      category: "bio",
    });
  }
  return (
    <>
      <TextInput
        labelText="Name:"
        inputName="name"
        inputOnChange={handleChange}
        inputValue={bio.name}
      />
      <TextInput
        labelText="Job Title:"
        inputName="jobTitle"
        inputOnChange={handleChange}
        inputValue={bio.jobTitle}
      />
    </>
  );
}

export default FormBio;
