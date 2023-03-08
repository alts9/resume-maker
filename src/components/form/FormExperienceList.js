import React from "react";
import TextInput from "./element/TextInput";
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
      <div className="input-subgroup">
        <TextInput
          labelText="⌙List Item:"
          inputName="listItem"
          inputOnChange={handleChange}
          inputDefault={detailsItem}
        />{" "}
      </div>
    </>
  );
}

export default FormExperienceList;
