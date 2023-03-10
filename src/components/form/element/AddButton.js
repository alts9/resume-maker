import React from "react";

function AddButton({ handleAdd, text }) {
  return (
    <div className="add-button-container">
      <button className="add" onClick={handleAdd}>
        {text}
      </button>
    </div>
  );
}

export default AddButton;
