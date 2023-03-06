import React from "react";
import FormInfo from "./FormInfo";

function FormInfos({ id, info, updateTitle, updateInfoItem }) {
  function handleTitleChange(e) {
    updateTitle(id, e.target.value);
  }
  return (
    <>
      <label>
        Info Name:
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
