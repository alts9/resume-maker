import React from "react";

function FormProfile({ profile, updateProfile }) {
  function handleChange(e) {
    updateProfile(e.target.value);
  }
  return (
    <>
      <label htmlFor="name">Profile:</label>

      <div className="input-group">
        <textarea
          className="profileInput"
          type="text"
          name="name"
          onChange={handleChange}
          defaultValue={profile.profileSummary}
        />
      </div>
    </>
  );
}

export default FormProfile;
