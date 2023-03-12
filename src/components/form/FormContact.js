import React, { useRef, useEffect } from "react";

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
            <select
              id="icon"
              name="icon"
              onChange={handleIconChange}
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Pick icon
              </option>
              <option value="0 behance-icon">Behance</option>
              <option value="1 dribbble-icon">Dribbble</option>
              <option value="2 envelope-icon">Email</option>
              <option value="3 facebook-icon">Facebook</option>
              <option value="4 github-icon">Github</option>{" "}
              <option value="5 house-icon">Home</option>{" "}
              <option value="6 instagram-icon">Instagram</option>{" "}
              <option value="7 linkedIn-icon">LinkedIn</option>{" "}
              <option value="8 phone-icon">Phone</option>{" "}
              <option value="9 website-icon">Website</option>{" "}
              <option value="10 twitter-icon">Twitter</option>{" "}
              <option value="11 whatsapp-icon">Whatsapp</option>
            </select>
          </div>
        </div>
        <TextInput
          labelText="Item:"
          inputName="data"
          inputOnChange={handleChange}
          inputValue={contact.data}
        />
      </div>
      <button onClick={handleRemove} className="remove">
        X
      </button>
    </>
  );
}

export default FormContact;
