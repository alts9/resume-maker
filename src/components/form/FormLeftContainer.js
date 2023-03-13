import React from "react";
import FormInfos from "./FormInfos";
import FormLists from "./FormLists";

function FormLeftContainer({ contents, updateData, addData, removeData }) {
  function handleClick(e) {
    addData({ category: e.target.value });
  }
  return (
    <>
      <div className="form-large-header">Left Column</div>
      {contents.map((content, index) => {
        if (content.type === "info") {
          return (
            <FormInfos
              key={index}
              id={index}
              info={content}
              updateData={updateData}
              addData={addData}
              removeData={removeData}
            />
          );
        } else if (content.type === "list") {
          return (
            <FormLists
              key={index}
              id={index}
              list={content}
              updateData={updateData}
              addData={addData}
              removeData={removeData}
            />
          );
        }
      })}
      <div className="column-add-container ">
        <button className="add" value="infoSection" onClick={handleClick}>
          Add Info
        </button>
        <button
          className="add"
          value="listProficiencySection"
          onClick={handleClick}
        >
          Add Proficiency List
        </button>
        <button className="add" value="listBasicSection" onClick={handleClick}>
          Add Basic List
        </button>
        <button className="add" value="listScoreSection" onClick={handleClick}>
          Add Skillbar List
        </button>
      </div>
    </>
  );
}

export default FormLeftContainer;
