import React from "react";

function FormInfo({ item, updateInfoItem, itemId, infoId }) {
  function handleItemChange(e) {
    updateInfoItem(infoId, itemId, e.target.name, e.target.value);
  }
  return (
    <>
      {" "}
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleItemChange}
          defaultValue={item.name}
        />
      </label>
      <label>
        Institution:
        <input
          type="text"
          name="institution"
          onChange={handleItemChange}
          defaultValue={item.institution}
        />
      </label>
      <label>
        Year Start:
        <input
          type="text"
          name="yearStart"
          onChange={handleItemChange}
          defaultValue={item.yearStart}
        />
      </label>
      <label>
        Year Finished:
        <input
          type="text"
          name="yearEnd"
          onChange={handleItemChange}
          defaultValue={item.yearEnd}
        />
      </label>
    </>
  );
}

export default FormInfo;
