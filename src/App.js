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

  //for info & list component
  function updateTitle(index, newValue) {
    const newResume = { ...resume };
    newResume.leftContent[index].name = newValue;
    SetResume(newResume);
  }

  function updateInfoItem(infoIndex, itemIndex, property, newValue) {
    const newResume = { ...resume };
    newResume.leftContent[infoIndex].items[itemIndex][property] = newValue;
    SetResume(newResume);
  }

  function updateListItem(
    listIndex,
    itemIndex,
    proficiencyType,
    property,
    newValue
  ) {
    const newResume = { ...resume };
    if (proficiencyType === "none") {
      newResume.leftContent[listIndex].items[itemIndex] = newValue;
    } else if (proficiencyType === "level") {
      newResume.leftContent[listIndex].items[itemIndex][property] = newValue;
    } else if (proficiencyType === "score") {
      newResume.leftContent[listIndex].items[itemIndex][property] = newValue;
    }
    SetResume(newResume);
  }
  // updateListItem(2, 0, "none", "", "test");
  // updateListItem(1, 0, "level", "proficiency", "test");
  //updateListItem(3, 0, "score", "proficiency", "5");

  // useEffect(() => {
  //   updateListItem(3, 0, "score", "proficiency", "5");
  // }, []);
  console.log(resume.leftContent[1].items[0]);
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
          updateTitle={updateTitle}
          updateInfoItem={updateInfoItem}
          updateListItem={updateListItem}
        />
        <Preview resume={resume} />
      </div>
    </>
  );
}

export default App;
