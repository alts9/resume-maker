import React from "react";

function TextInput({ labelText, inputName, inputOnChange, inputDefault }) {
  return (
    <>
      <div className={"input-text"}>
        <label htmlFor={inputName}>{labelText} </label>
        <input
          type="text"
          name={inputName}
          onChange={inputOnChange}
          defaultValue={inputDefault}
        />
      </div>
    </>
  );
}

export default TextInput;
