import React from "react";
import FormInfo from "./FormInfo";

function FormInfos({ id, info, updateInfoTitle, updateInfoItem }) {
  function handleTitleChange(e) {
    updateInfoTitle(id, e.target.value);
  }
  return (
    <>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleTitleChange}
          defaultValue={info.name}
        />
      </label>
      {info.items.map((item, index) => {
        return (
          <FormInfo
            key={index}
            itemId={index}
            item={item}
            updateInfoItem={updateInfoItem}
            infoId={id}
          />
        );
      })}
    </>
  );
}

export default FormInfos;
