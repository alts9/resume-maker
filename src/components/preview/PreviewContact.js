import React from "react";
import {
  FaBehance, //0
  FaDribbble,
  FaEnvelope,
  FaFacebookSquare,
  FaGithub,
  FaHome, //5
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTv,
  FaTwitter, //10
  FaWhatsapp,
} from "react-icons/fa";
function PreviewContact({ contact, icon }) {
  const icons = [
    { icon: <FaBehance className={contact.iconName} /> },
    { icon: <FaDribbble className={contact.iconName} /> },
    { icon: <FaEnvelope className={contact.iconName} /> },
    { icon: <FaFacebookSquare className={contact.iconName} /> },
    { icon: <FaGithub className={contact.iconName} /> },
    { icon: <FaHome className={contact.iconName} /> },
    { icon: <FaInstagram className={contact.iconName} /> },
    { icon: <FaLinkedin className={contact.iconName} /> },
    { icon: <FaPhoneAlt className={contact.iconName} /> },
    { icon: <FaTv className={contact.iconName} /> },
    { icon: <FaTwitter className={contact.iconName} /> },
    { icon: <FaWhatsapp className={contact.iconName} /> },
  ];
  // const icons2 = [
  //   { icon: <FaBehance className={"behance-icon"} /> },
  //   { icon: <FaDribbble className={"dribbble-icon"} /> },
  //   { icon: <FaEnvelope className={"envelope-icon"} /> },
  //   { icon: <FaFacebookSquare className={"facebook-icon"} /> },
  //   { icon: <FaGithub className={"github-icon"} /> },
  //   { icon: <FaHome className={"home-icon"} /> },
  //   { icon: <FaInstagram className={"instagram-icon"} /> },
  //   { icon: <FaLinkedin className={"linkedIn-icon"} /> },
  //   { icon: <FaPhoneAlt className={"phone-icon"} /> },
  //   { icon: <FaTv className={"website-icon"} /> },
  //   { icon: <FaTwitter className={"twitter-icon"} /> },
  //   { icon: <FaWhatsapp className={"whatsapp-icon"} /> },
  // ];
  return (
    <div>
      {icons[contact.iconId].icon}
      {contact.data}
    </div>
    // <div className="">
    //   {icons2[0].icon} Abc
    //   {icons2[1].icon} Abc
    //   {icons2[2].icon}
    //   {icons2[3].icon}
    //   {icons2[4].icon}
    //   {icons2[5].icon}
    //   {icons2[6].icon}
    //   {icons2[7].icon}
    //   {icons2[8].icon}
    //   {icons2[9].icon}
    //   {icons2[10].icon}
    //   {icons2[11].icon}
    // </div>
  );
}

export default PreviewContact;
