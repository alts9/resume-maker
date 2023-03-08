import React from "react";
import TextInput from "./element/TextInput";

function FormList({ item, proficiencyType, itemId, listId, updateData }) {
  function handleItemChange(e) {
    updateData({
      category: "list",
      mainId: listId,
      subId: itemId,
      subCategory: proficiencyType,
      property: e.target.name,
      newValue: e.target.value,
    });
  }
  if (proficiencyType === "none") {
    return (
      <>
        <TextInput
          labelText="List Item:"
          inputName="name"
          inputOnChange={handleItemChange}
          inputDefault={item}
        />
      </>
    );
  } else if (proficiencyType === "level") {
    return (
      <>
        <TextInput
          labelText="List Item:"
          inputName="name"
          inputOnChange={handleItemChange}
          inputDefault={item.name}
        />

        <TextInput
          labelText="Proficiency:"
          inputName="proficiency"
          inputOnChange={handleItemChange}
          inputDefault={item.proficiency}
        />
      </>
    );
  } else if (proficiencyType === "score") {
    return (
      <>
        <TextInput
          labelText="List Item:"
          inputName="name"
          inputOnChange={handleItemChange}
          inputDefault={item.name}
        />
        <div className="input-item">
          <label htmlFor="proficiency">Proficiency:</label>
          <input
            type="number"
            min="0"
            max="5"
            name="proficiency"
            onChange={handleItemChange}
            value={parseInt(item.proficiency)}
          />
        </div>
      </>
    );
  }
}

export default FormList;
