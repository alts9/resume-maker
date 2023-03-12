import React from "react";
import PreviewContact from "./PreviewContact";
function PreviewContacts({ contact }) {
  return (
    <>
      {contact.map((contact, index) => {
        return <PreviewContact key={index} contact={contact} />;
      })}
    </>
  );
}

export default PreviewContacts;
