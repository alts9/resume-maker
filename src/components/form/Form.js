import React from "react";
import "./Form.css";
import FormBio from "./FormBio";
import FormContact from "./FormContact";
import FormProfile from "./FormProfile";
import FormLeftContainer from "./FormLeftContainer";
import FormRightContainer from "./FormRightContainer";
import AddButton from "./element/AddButton";

function Form({ resume, updateData, updateContactIcon, addData, removeData }) {
  function handleAdd() {
    addData({ category: "contact" });
  }
  return (
    <>
      <div className="form-container">
        <div className="form-bio">
          <div className="form-header">Bio</div>

          <FormBio bio={resume.bio} updateData={updateData} />
        </div>
        <div className="form-contact">
          <div className="form-header">Contact</div>
          <div className="input-container">
            {resume.contact.map((contact, index) => {
              return (
                <FormContact
                  key={index}
                  id={index}
                  contact={contact}
                  updateData={updateData}
                  updateContactIcon={updateContactIcon}
                  addData={addData}
                  removeData={removeData}
                />
              );
            })}
            <AddButton handleAdd={handleAdd} text={"Add contact"} />
          </div>
        </div>
        <div className="form-profile ">
          <div className="form-header">Profile</div>
          <div className="input-container text-area-container">
            <FormProfile profile={resume.profile} updateData={updateData} />
          </div>
        </div>
        <div className="form-left-container ">
          <FormLeftContainer
            contents={resume.leftContents}
            updateData={updateData}
            addData={addData}
            removeData={removeData}
          />
        </div>
        <div className="form-right-container ">
          <FormRightContainer
            contents={resume.rightContents}
            updateData={updateData}
            addData={addData}
            removeData={removeData}
          />
        </div>
      </div>
    </>
  );
}

export default Form;
