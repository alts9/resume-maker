import React from "react";
import FormList from "./FormList";

function FormLists({ id, list, updateTitle, updateListItem }) {
  function handleTitleChange(e) {
    updateTitle(id, e.target.value);
  }
  return (
    <>
      {" "}
      <label>
        List Name:
        <input
          type="text"
          name="name"
          onChange={handleTitleChange}
          defaultValue={list.name}
        />
      </label>
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
    </>
  );
}

export default FormLists;
