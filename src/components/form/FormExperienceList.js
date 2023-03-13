import React from "react";
import TextInput from "./element/TextInput";
function FormExperienceList({
  updateData,
  experienceId,
  itemId,
  listItemId,
  detailsItem,
  removeData,
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
  function handleRemove() {
    removeData({
      category: "itemListExperience",
      mainId: experienceId,
      subId: itemId,
      subSubId: listItemId,
    });
  }
  return (
    <>
      <div className="input-subgroup">
        <TextInput
          labelText="⌙List Item:"
          inputName="listItem"
          inputOnChange={handleChange}
          inputValue={detailsItem}
        />
        <button onClick={handleRemove} className="removeBtn">
          X
        </button>
      </div>
    </>
  );
}

export default FormExperienceList;
