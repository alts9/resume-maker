import React from "react";
import TextInput from "./element/TextInput";

function FormInfo({ item, updateData, itemId, infoId }) {
  function handleItemChange(e) {
    updateData({
      category: "info",
      mainId: infoId,
      subId: itemId,
      property: e.target.name,
      newValue: e.target.value,
    });
  }
  return (
    <>
      <div className="input-group">
        <div className="">
          <TextInput
            labelText="Name:"
            inputName="name"
            inputOnChange={handleItemChange}
            inputDefault={item.name}
          />
          <TextInput
            labelText="Institution:"
            inputName="institution"
            inputOnChange={handleItemChange}
            inputDefault={item.institution}
          />
          <TextInput
            labelText="Year Start:"
            inputName="yearStart"
            inputOnChange={handleItemChange}
            inputDefault={item.yearStart}
          />
          <TextInput
            labelText="Year Finished:"
            inputName="yearEnd"
            inputOnChange={handleItemChange}
            inputDefault={item.yearEnd}
          />
        </div>
        <button className="remove">X</button>
      </div>
    </>
  );
}

export default FormInfo;
