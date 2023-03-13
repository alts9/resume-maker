import React from "react";

function ButtonContainer(handleRemove) {
  return (
    <div className="button-container">
      {" "}
      <button onClick={handleRemove} className="removeBtn">
        X
      </button>
      <button className="reorderBtn">⬆</button>
      <button className="reorderBtn">⬇</button>
    </div>
  );
}

export default ButtonContainer;
