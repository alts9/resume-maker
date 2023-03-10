import React from "react";
import TextInput from "./element/TextInput";
function FormContact({
  contact,
  updateData,
  updateContactIcon,
  id,
  removeData,
}) {
  function handleChange(e) {
    updateData({
      mainId: id,
      property: e.target.name,
      newValue: e.target.value,
      category: "contact",
    });
  }

  function handleRemove() {
    removeData({ category: "contact", mainId: id });
  }

  function handleIconChange(e) {
    const valueSplit = e.target.value.split(" ");
    updateContactIcon(id, valueSplit[0], valueSplit[1]);
  }

  return (
    <>
      <div className="input-item">
        {" "}
        <div>
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
      </div>
      <button onClick={handleRemove} className="remove">
        X
      </button>
    </>
  );
}

export default FormContact;
