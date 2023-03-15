import React from "react";
import PreviewContact from "./PreviewContact";
import behance from "../../icons/behance.png";
import dribbble from "../../icons/dribbble.png";
import envelope from "../../icons/envelope-regular.png";
import facebook from "../../icons/facebook-square.png";
import github from "../../icons/github.png";
import house from "../../icons/home-solid.png";
import instagram from "../../icons/instagram.png";
import linkedin from "../../icons/linkedin.png";
import phone from "../../icons/phone-alt-solid.png";
import twitter from "../../icons/twitter.png";
import whatsapp from "../../icons/whatsapp.png";
import website from "../../icons/desktop-solid.png";

function PreviewContacts({ contact }) {
  const icons = [
    { icon: behance, class: "" },
    { icon: dribbble, class: "" },
    { icon: envelope, class: "" },
    { icon: facebook, class: "" },
    { icon: github, class: "" },
    { icon: house, class: "" },
    { icon: instagram, class: "" },
    { icon: linkedin, class: "" },
    { icon: phone, class: "phone-icon" },
    { icon: twitter, class: "" },
    { icon: website, class: "" },
    { icon: whatsapp, class: "" },
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
