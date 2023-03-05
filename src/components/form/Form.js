import React from "react";
import "./Form.css";
import FormBio from "./FormBio";
import FormContact from "./FormContact";
import FormProfile from "./FormProfile";
import FormLeftContainer from "./FormLeftContainer";

function Form({
  resume,
  updateBio,
  updateContact,
  updateContactIcon,
  updateProfile,
  updateInfoTitle,
  updateInfoItem,
}) {
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
        <div className="form-profile">
          <FormProfile profile={resume.profile} updateProfile={updateProfile} />
        </div>
        <div className="form-left-container">
          <FormLeftContainer
            contents={resume.leftContent}
            updateInfoTitle={updateInfoTitle}
            updateInfoItem={updateInfoItem}
          />
        </div>
      </div>{" "}
    </>
  );
}

export default Form;
