import React from "react";
import TextInput from "./element/TextInput";
function FormReference({
  itemId,
  reference,
  referenceId,
  updateData,
  removeData,
}) {
  function handleChange(e) {
    updateData({
      category: "reference",
      mainId: referenceId,
      subId: itemId,
      property: e.target.name,
      newValue: e.target.value,
    });
  }
  function handleRemove() {
    removeData({
      category: "itemReference",
      mainId: referenceId,
      subId: itemId,
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
            inputValue={reference.name}
          />
          <TextInput
            labelText="Job Title:"
            inputName="jobTitle"
            inputOnChange={handleChange}
            inputValue={reference.jobTitle}
          />
          <TextInput
            labelText="Company:"
            inputName="companyName"
            inputOnChange={handleChange}
            inputValue={reference.companyName}
          />
          <TextInput
            labelText="Phone:"
            inputName="phone"
            inputOnChange={handleChange}
            inputValue={reference.phone}
          />
          <TextInput
            labelText="Email:"
            inputName="email"
            inputOnChange={handleChange}
            inputValue={reference.email}
          />
        </div>
      </div>
      <button onClick={handleRemove} className="removeBtn">
        X
      </button>
    </>
  );
}

export default FormReference;
