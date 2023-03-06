import React from "react";

function FormList({ item, proficiencyType, itemId, listId, updateListItem }) {
  function handleItemChange(e) {
    updateListItem(
      listId,
      itemId,
      proficiencyType,
      e.target.name,
      e.target.value
    );
  }
  if (proficiencyType === "none") {
    return (
      <>
        <label>
          List Item:
          <input
            type="text"
            name="name"
            onChange={handleItemChange}
            defaultValue={item}
          />
        </label>
      </>
    );
  } else if (proficiencyType === "level") {
    return (
      <>
        <label>
          List Item:
          <input
            type="text"
            name="name"
            onChange={handleItemChange}
            defaultValue={item.name}
          />
        </label>
        <label>
          Proficiency:
          <input
            type="text"
            name="proficiency"
            onChange={handleItemChange}
            defaultValue={item.proficiency}
          />
        </label>
      </>
    );
  } else if (proficiencyType === "score") {
    return (
      <>
        {" "}
        <label>
          List Item:
          <input
            type="text"
            name="name"
            onChange={handleItemChange}
            defaultValue={item.name}
          />
        </label>
        <label>
          Proficiency:
          <input
            type="number"
            min="0"
            max="5"
            name="proficiency"
            onChange={handleItemChange}
            value={parseInt(item.proficiency)}
          />
        </label>
      </>
    );
  }
}

export default FormList;
