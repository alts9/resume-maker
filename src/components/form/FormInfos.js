import React from "react";
import FormInfo from "./FormInfo";
import TextInput from "./element/TextInput";

function FormInfos({ id, info, updateTitle, updateInfoItem }) {
  function handleTitleChange(e) {
    updateTitle(id, e.target.value);
  }
  function handleAdd() {
    console.log(info);
  }
  return (
    <>
      <div className="form-header">Form Info</div>
      <div className="left-column-title">
        <TextInput
          labelText="Title:"
          inputName="name"
          inputOnChange={handleTitleChange}
          inputDefault={info.name}
        />
      </div>
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
      <div className="add-button-container">
        <button className="add" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
}

export default FormInfos;
