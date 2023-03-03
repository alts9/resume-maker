import React from "react";
import Bio from "./Bio";
import Contact from "./Contact";

function Form({ resume, updateBio, updateContact }) {
  return (
    <>
      <div className="bio">
        <Bio bio={resume.bio} updateBio={updateBio} />
        <div className="">Contact</div>
        {resume.contact.map((contact) => {
          return <Contact contact={contact} />;
        })}
      </div>
    </>
  );
}

export default Form;
