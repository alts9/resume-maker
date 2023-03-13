import React from "react";
import TextInput from "./element/TextInput";

function FormInfo({ item, updateData, itemId, infoId, removeData }) {
  function handleItemChange(e) {
    updateData({
      category: "info",
      mainId: infoId,
      subId: itemId,
      property: e.target.name,
      newValue: e.target.value,
    });
  }
  function handleRemove() {
    removeData({ category: "itemInfo", mainId: infoId, subId: itemId });
  }
  return (
    <>
      <div className="input-item">
        <div>
          <TextInput
            labelText="Name:"
            inputName="name"
            inputOnChange={handleItemChange}
            inputValue={item.name}
          />
          <TextInput
            labelText="Institution:"
            inputName="institution"
            inputOnChange={handleItemChange}
            inputValue={item.institution}
          />
          <TextInput
            labelText="Year Start:"
            inputName="yearStart"
            inputOnChange={handleItemChange}
            inputValue={item.yearStart}
          />
          <TextInput
            labelText="Year Finished:"
            inputName="yearEnd"
            inputOnChange={handleItemChange}
            inputValue={item.yearEnd}
          />
        </div>

        <button onClick={handleRemove} className="removeBtn">
          X
        </button>
      </div>
    </>
  );
}

export default FormInfo;
