import React from "react";
import "./Form.css";
import FormBio from "./FormBio";
import FormContact from "./FormContact";
import FormProfile from "./FormProfile";
import FormLeftContainer from "./FormLeftContainer";
import FormRightContainer from "./FormRightContainer";

function Form({
  resume,
  updateBio,
  updateContact,
  updateContactIcon,
  updateProfile,
  updateTitle,
  updateInfoItem,
  updateListItem,
  updateExperienceInfo,
  updateExperienceList,
  updateReference,
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
          <div className="form-header form-group">Contact</div>
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
        <div className="form-profile form-group">
          <div className="form-header">Profile</div>
          <div className="profile-item-container">
            <FormProfile
              profile={resume.profile}
              updateProfile={updateProfile}
            />
          </div>
        </div>
        <div className="form-left-container form-group">
          <FormLeftContainer
            contents={resume.leftContents}
            updateTitle={updateTitle}
            updateInfoItem={updateInfoItem}
            updateListItem={updateListItem}
          />
        </div>
        <div className="form-right-container form-group">
          <FormRightContainer
            contents={resume.rightContents}
            updateExperienceInfo={updateExperienceInfo}
            updateExperienceList={updateExperienceList}
            updateReference={updateReference}
          />
        </div>
      </div>{" "}
    </>
  );
}

export default Form;
