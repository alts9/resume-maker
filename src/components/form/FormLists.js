import React from "react";
import FormList from "./FormList";
import TextInput from "./element/TextInput";
function FormLists({ id, list, updateData, addData, removeData }) {
  function handleTitleChange(e) {
    updateData({
      mainId: id,
      newValue: e.target.value,
      category: "leftColumnTitle",
    });
  }
  function handleAdd(e) {
    addData({ category: "list" + e.target.name, mainId: id });
  }
  function handleRemove() {
    removeData({ category: "formList", mainId: id });
  }

  function pickHeader(proficiency) {
    switch (proficiency) {
      case "none":
        return "List-basic";
      case "level":
        return "List-proficiency";
      case "score":
        return "List-score";
      default:
        break;
    }
  }

  return (
    <>
      <div className="form-list ">
        {" "}
        <div className="form-header ">
          {pickHeader(list.proficiencyType)}{" "}
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
                inputValue={list.name}
              />{" "}
            </div>
          </div>

          {list.items.map((item, index) => {
            return (
              <FormList
                key={index}
                itemId={index}
                proficiencyType={list.proficiencyType}
                item={item}
                listId={id}
                updateData={updateData}
                removeData={removeData}
              />
            );
          })}
        </div>
        <div className="add-button-container">
          <button
            className="add"
            name={list.proficiencyType}
            onClick={handleAdd}
          >
            Add List
          </button>
        </div>
      </div>
    </>
  );
}

export default FormLists;
