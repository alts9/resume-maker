import React from "react";

function PreviewList({ item, proficiencyType }) {
  if (proficiencyType === "level") {
    return (
      <>
        <li className="list-item">
          <div className="name">{item.name}</div>
          <div className="level-proficiency">({item.proficiency})</div>
        </li>
      </>
    );
  } else if (proficiencyType === "none") {
    return (
      <>
        <li className="list-item">
          <div className="name">{item}</div>
        </li>
      </>
    );
  } else if (proficiencyType === "score") {
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
