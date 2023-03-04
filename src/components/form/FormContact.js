import React from "react";

function FormContact({ contact, updateContact, updateContactIcon }) {
  function handleChange(e) {
    updateContact(contact.id, e.target.name, e.target.value);
  }

  function handleIconChange(e) {
    // console.log(e.target.value);
    const valueSplit = e.target.value.split(" ");
    console.log(e.target.value.split(" "));
    updateContactIcon(contact.id, valueSplit[0], valueSplit[1]);
  }
  return (
    <>
      <div className="">
        <label htmlFor="">
          Icon{" "}
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
        </label>
      </div>
      <div className="form-contact-item">
        <label>
          Content{" "}
          <input
            type="text"
            name="data"
            onChange={handleChange}
            defaultValue={contact.data}
          />
        </label>
      </div>
    </>
  );
}

export default FormContact;
