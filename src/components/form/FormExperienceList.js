import React from "react";

function FormExperienceList({
  updateExperienceList,
  experienceId,
  itemId,
  listItemId,
  detailsItem,
}) {
  function handleChange(e) {
    updateExperienceList(experienceId, itemId, listItemId, e.target.value);
    console.log(experienceId, itemId, listItemId, e.target.value);
  }
  return (
    <>
      {" "}
      <label>
        List Item:
        <input
          type="text"
          name="listItem"
          onChange={handleChange}
          defaultValue={detailsItem}
        />
      </label>
    </>
  );
}

export default FormExperienceList;
