import React from "react";

function FormReference({ itemId, reference, referenceId, updateReference }) {
  function handleChange(e) {
    updateReference(referenceId, itemId, e.target.name, e.target.value);
  }
  return (
    <>
      {" "}
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          defaultValue={reference.name}
        />
      </label>
      <label>
        Job Title:
        <input
          type="text"
          name="jobTitle"
          onChange={handleChange}
          defaultValue={reference.jobTitle}
        />
      </label>
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          onChange={handleChange}
          defaultValue={reference.companyName}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          defaultValue={reference.phone}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          onChange={handleChange}
          defaultValue={reference.email}
        />
      </label>
    </>
  );
}

export default FormReference;
