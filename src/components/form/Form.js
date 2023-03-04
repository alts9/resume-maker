import React from "react";
import FormBio from "./FormBio";
import FormContact from "./FormContact";
import "./Form.css";

function Form({ resume, updateBio, updateContact, updateContactIcon }) {
  return (
    <>
      <div className="form-container">
        <div className="form-bio form-group">
          <div className="form-header">Bio</div>
          <FormBio bio={resume.bio} updateBio={updateBio} />
        </div>
        <div className="form-contact form-group">
          {" "}
          <div className="form-header">Contact</div>
          {resume.contact.map((contact) => {
            return (
              <FormContact
                key={contact.id}
                contact={contact}
                updateContact={updateContact}
                updateContactIcon={updateContactIcon}
              />
            );
          })}
        </div>
      </div>{" "}
    </>
  );
}

export default Form;
