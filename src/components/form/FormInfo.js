import React from "react";
import TextInput from "./element/TextInput";

function FormInfo({ item, updateInfoItem, itemId, infoId }) {
  function handleItemChange(e) {
    updateInfoItem(infoId, itemId, e.target.name, e.target.value);
  }
  return (
    <>
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
    </>
  );
}

export default FormInfo;
