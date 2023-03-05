import React from "react";

function FormProfile({ profile, updateProfile }) {
  function handleChange(e) {
    updateProfile(e.target.value);
  }
  return (
    <>
      <label>
        Name:
        <textarea
          className="profileInput"
          type="text"
          name="name"
          onChange={handleChange}
          defaultValue={profile.profileSummary}
        />
      </label>
    </>
  );
}

export default FormProfile;
