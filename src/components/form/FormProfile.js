import React from "react";

function FormProfile({ profile, updateData }) {
  function handleChange(e) {
    updateData({ category: "profile", newValue: e.target.value });
  }
  return (
    <>
      <label htmlFor="name">Profile:</label>

        <textarea
          className="profileInput"
          type="text"
          name="name"
          onChange={handleChange}
          defaultValue={profile.profileSummary}
        />

    </>
  );
}

export default FormProfile;
