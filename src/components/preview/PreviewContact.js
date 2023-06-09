import React from "react";

function PreviewContact({ contact, icon }) {
  return (
    <div>
      <img className={contact.iconName} src={icon} alt="Logo" /> {"  "}
      {contact.data}
    </div>
  );
}

export default PreviewContact;
