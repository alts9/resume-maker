import React from "react";

function Contact({ contact }) {
  function handleChange(e) {
    // updateBio(e.target.name, e.target.value);
  }
  return (
    <>
      <div className="">
        {" "}
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            onChange={handleChange}
            defaultValue={contact.icon}
          />
        </label>
      </div>
    </>
  );
}

export default Contact;
