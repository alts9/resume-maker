import React from "react";
import "./Form.css";
import FormBio from "./FormBio";
import FormContact from "./FormContact";
import FormProfile from "./FormProfile";
import FormLeftContainer from "./FormLeftContainer";
import FormRightContainer from "./FormRightContainer";

function Form({ resume, updateData, updateContactIcon}) {
  return (
    <>
      <div className="form-container">
        <div className="form-bio form-group">
          <div className="form-header">Bio</div>
          <FormBio bio={resume.bio} updateData={updateData} />
        </div>
        <div className="form-contact form-group">
          <div className="form-header form-group">Contact</div>
          <div className="input-group">
            {" "}
            {resume.contact.map((contact) => {
              return (
                <FormContact
                  key={contact.id}
                  contact={contact}
                  updateData={updateData}
                  updateContactIcon={updateContactIcon}
                />
              );
            })}
          </div>
        </div>
        <div className="form-profile form-group">
          <div className="form-header">Profile</div>
          <div className="profile-item-container">
            <FormProfile profile={resume.profile} updateData={updateData} />
          </div>
        </div>
        <div className="form-left-container form-group">
          <FormLeftContainer
            contents={resume.leftContents}
            updateData={updateData}
          />
        </div>
        <div className="form-right-container form-group">
          <FormRightContainer
            contents={resume.rightContents}
            updateData={updateData}
          />
        </div>
      </div>{" "}
    </>
  );
}

export default Form;
