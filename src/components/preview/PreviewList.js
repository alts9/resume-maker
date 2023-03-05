import React from "react";

function PreviewList({ item, proficiency }) {
  if (proficiency === "level") {
    return (
      <>
        <li className="list-item">
          <div className="name">{item.name}</div>
          <div className="level-proficiency">({item.proficiency})</div>
        </li>
      </>
    );
  } else if (proficiency === "none") {
    return (
      <>
        <li className="list-item">
          <div className="name">{item}</div>
        </li>
      </>
    );
  } else if (proficiency === "score") {
    const className = "proficiency-bar-fill width-" + item.proficiency;
    return (
      <>
        <li className="list-item">
          <div className="name">{item.name}</div>
          <div className="proficiency-bar-container">
            <div className={className}></div>
          </div>
        </li>
      </>
    );
  }
}

export default PreviewList;
