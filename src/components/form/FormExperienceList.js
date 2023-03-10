import React from "react";
import TextInput from "./element/TextInput";
function FormExperienceList({
  updateData,
  experienceId,
  itemId,
  listItemId,
  detailsItem,
}) {
  function handleChange(e) {
    updateData({
      category: "experienceList",
      mainId: experienceId,
      subId: itemId,
      subSubId: listItemId,
      newValue: e.target.value,
    });
  }
  return (
    <>
      <div className="input-subgroup">
        <TextInput
          labelText="⌙List Item:"
          inputName="listItem"
          inputOnChange={handleChange}
          inputDefault={detailsItem}
        />
        <button className="remove">X</button>
      </div>
    </>
  );
}

export default FormExperienceList;
