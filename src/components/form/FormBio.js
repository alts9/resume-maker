import React from "react";

function FormBio({ bio, updateBio }) {
  function handleChange(e) {
    updateBio(e.target.name, e.target.value);
  }
  return (
    <>
      <div className=""> </div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          defaultValue={bio.name}
        />
      </label>

      <div className="">
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            onChange={handleChange}
            defaultValue={bio.jobTitle}
          />
        </label>
      </div>
    </>
  );
}

export default FormBio;
