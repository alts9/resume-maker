import React from "react";
import FormInfo from "./FormInfo";
import TextInput from "./element/TextInput";

function FormInfos({ id, info, updateTitle, updateInfoItem }) {
  function handleTitleChange(e) {
    updateTitle(id, e.target.value);
  }
  return (
    <>
      <div className="form-header">Form Info</div>
      <div className="left-column-title">
        {" "}
        <TextInput
          labelText="Title:"
          inputName="name"
          inputOnChange={handleTitleChange}
          inputDefault={info.name}
        />
      </div>
      {info.items.map((item, index) => {
        return (
          <>
            {" "}
            <div className="input-group">
              <div className="">
                {" "}
                <FormInfo
                  key={index}
                  itemId={index}
                  item={item}
                  updateInfoItem={updateInfoItem}
                  infoId={id}
                />
              </div>
              {/* <button className="remove">X</button> */}
            </div>
            {/* <button className="add">Add</button> */}
          </>
        );
      })}
    </>
  );
}

export default FormInfos;
