import React from "react";

function PreviewInfo({ item }) {
  return (
    <>
      <div className="info-item">
        <div className="name">{item.name}</div>
        <div className="details">{item.institution}</div>
        <div className="year">
          {item.yearStart} {item.yearEnd !== "" ? "- " + item.yearEnd : ""}
        </div>
      </div>
    </>
  );
}

export default PreviewInfo;
