import { userResume } from "./modules/SampleObject";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/Form";
import Preview from "./components/preview/Preview";
import React, { useState, useEffect } from "react";

function App() {
  const [resume, SetResume] = useState(userResume);

  function updateBio(variable, newValue) {
    const newResume = { ...resume };
    newResume.bio[variable] = newValue;
    SetResume(newResume);
  }

  function updateContact(id, property, newValue) {
    const newResume = { ...resume };
    newResume.contact[id][property] = newValue;
    SetResume(newResume);
  }

  function updateContactIcon(contactId, newIconId, newIconClass) {
    const newResume = { ...resume };
    newResume.contact[contactId].iconid = newIconId;
    newResume.contact[contactId].iconName = newIconClass;
    SetResume(newResume);
    console.log(resume.contact);
  }

  function updateProfile(newValue) {
    const newResume = { ...resume };
    newResume.profile.profileSummary = newValue;
    SetResume(newResume);
  }

  function updateInfoTitle(index, newValue) {
    const newResume = { ...resume };
    newResume.leftContent[index].name = newValue;
    SetResume(newResume);
  }

  function updateInfoItem(infoIndex, itemIndex, property, newValue) {
    const newResume = { ...resume };
    newResume.leftContent[infoIndex].items[itemIndex][property] = newValue;
    SetResume(newResume);
  }

  // useEffect(() => {
  //   updateInfoItem(0, 1, "institution", "asdf");
  //   console.log(resume.leftContent[0].items[1]);
  // }, []);
  console.log(resume.leftContent[0].items[1]);
  return (
    <>
      <div className="main-container">
        {" "}
        <Form
          resume={resume}
          updateBio={updateBio}
          updateContact={updateContact}
          updateContactIcon={updateContactIcon}
          updateProfile={updateProfile}
          updateInfoTitle={updateInfoTitle}
          updateInfoItem={updateInfoItem}
        />
        <Preview resume={resume} />
      </div>
    </>
  );
}

export default App;
