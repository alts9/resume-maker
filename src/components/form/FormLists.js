import React from "react";
import FormList from "./FormList";
import TextInput from "./element/TextInput";

function FormLists({ id, list, updateData }) {
  function handleTitleChange(e) {
    updateData({
      mainId: id,
      newValue: e.target.value,
      category: "leftColumnTitle",
    });
  }
  return (
    <>
      <div className="form-header ">Form List</div>{" "}
      <div className="left-column-title">
        {" "}
        <TextInput
          labelText="Title:"
          inputName="name"
          inputOnChange={handleTitleChange}
          inputDefault={list.name}
        />
      </div>
      <div className="input-group">
        {" "}
        <div className="">
          {" "}
          {list.items.map((item, index) => {
            return (
              <FormList
                key={index}
                itemId={index}
                proficiencyType={list.proficiencyType}
                item={item}
                listId={id}
                updateData={updateData}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FormLists;
