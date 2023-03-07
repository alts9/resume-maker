import React from "react";
import FormList from "./FormList";
import TextInput from "./element/TextInput";

function FormLists({ id, list, updateTitle, updateListItem }) {
  function handleTitleChange(e) {
    updateTitle(id, e.target.value);
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
        {list.items.map((item, index) => {
          return (
            <FormList
              key={index}
              itemId={index}
              proficiencyType={list.proficiencyType}
              item={item}
              listId={id}
              updateListItem={updateListItem}
            />
          );
        })}
      </div>
    </>
  );
}

export default FormLists;
