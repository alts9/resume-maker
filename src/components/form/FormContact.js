import React from "react";
import TextInput from "./element/TextInput";

function FormContact({ contact, updateData, updateContactIcon }) {
  function handleChange(e) {
    // updateData(contact.id, e.target.name, e.target.value);
    updateData({
      mainId: contact.id,
      property: e.target.name,
      newValue: e.target.value,
      category: "contact",
    });
  }

  function handleIconChange(e) {
    // console.log(e.target.value);
    const valueSplit = e.target.value.split(" ");
    console.log(e.target.value.split(" "));
    updateContactIcon(contact.id, valueSplit[0], valueSplit[1]);
  }
  return (
    <>
      <div className="input-item">
        <label htmlFor="icon">Icon</label>
        <div className="select-container">
          <select id="icon" name="icon" onChange={handleIconChange}>
            <option value="0 phone-icon">Phone</option>
            <option value="1 envelope-icon" data-class="envelope-icon">
              Email
            </option>
            <option value="2 house-icon" data-class="house-icon">
              Home
            </option>
            <option value="3 linkedIn-icon" data-class="linkedIn-icon">
              LinkedIn
            </option>
          </select>
        </div>
      </div>
      <TextInput
        labelText="Item:"
        inputName="data"
        inputOnChange={handleChange}
        inputDefault={contact.data}
      />
    </>
  );
}

export default FormContact;
