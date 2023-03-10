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
        <div className="input-item">
          <div>
            <TextInput
              labelText="List Item:"
              inputName="name"
              inputOnChange={handleItemChange}
              inputDefault={item}
            />
          </div>
          <button className="remove">X</button>
        </div>
      </>
    );
  } else if (proficiencyType === "level") {
    return (
      <>
        <div className="input-item">
          <div>
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
          </div>{" "}
          <button className="remove">X</button>
        </div>
      </>
    );
  } else if (proficiencyType === "score") {
    return (
      <>
        <div className="input-item">
          <div>
            <TextInput
              labelText="List Item:"
              inputName="name"
              inputOnChange={handleItemChange}
              inputDefault={item.name}
            />
            <div>
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
          </div>
          <button className="remove">X</button>
        </div>
      </>
    );
  }
}

export default FormList;
