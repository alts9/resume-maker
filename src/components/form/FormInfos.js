import React from "react";
import FormInfo from "./FormInfo";
import TextInput from "./element/TextInput";
import AddButton from "./element/AddButton";
function FormInfos({ id, info, updateData, addData, removeData }) {
  function handleTitleChange(e) {
    updateData({
      mainId: id,
      newValue: e.target.value,
      category: "leftColumnTitle",
    });
  }
  function handleAdd() {
    addData({ category: "info", mainId: id });
  }

  function handleRemove() {
    removeData({ category: "formInfo", mainId: id });
  }

  return (
    <>
      <div className="form-info ">
        <div className="form-header">
          Form Info{" "}
          <button onClick={handleRemove} className="remove">
            X
          </button>
        </div>
        <div className="input-container">
          <div className="input-title-container">
            <div className="input-title">
              <TextInput
                labelText="Title:"
                inputName="name"
                inputOnChange={handleTitleChange}
                inputValue={info.name}
              />
            </div>
          </div>
          {info.items.map((item, index) => {
            return (
              <FormInfo
                key={index}
                itemId={index}
                item={item}
                updateData={updateData}
                infoId={id}
                removeData={removeData}
              />
            );
          })}
          <AddButton handleAdd={handleAdd} text={"Add info"} />
        </div>
      </div>
    </>
  );
}

export default FormInfos;
