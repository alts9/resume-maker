import React from "react";
import PreviewContact from "./PreviewContact";
import phone from "../../icons/phone-solid.svg";
import envelope from "../../icons/envelope-solid.svg";
import house from "../../icons/house-solid.svg";
import linkedin from "../../icons/linkedin.svg";
function PreviewContacts({ contact }) {
  const icons = [
    { icon: phone, class: "phone-icon" },
    { icon: envelope, class: "envelope-icon" },
    { icon: house, class: "house-icon" },
    { icon: linkedin, class: "linkedin-icon" },
  ];
  return (
    <>
      {contact.map((contact, index) => {
        return (
          <PreviewContact
            key={index}
            icon={icons[contact.iconId].icon}
            contact={contact}
          />
        );
      })}
    </>
  );
}

export default PreviewContacts;
