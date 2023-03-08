import { userResume, infoTemplate } from "./modules/SampleObject";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/Form";
import Preview from "./components/preview/Preview";
import React, { useState, useEffect } from "react";

function App() {
  const [resume, SetResume] = useState(userResume);

  //data category
  function updateData(category, property, newValue) {
    switch (category) {
      case "bio":
        updateBio(property, newValue);
        break;
      default:
    }
  }

  function updateBio(property, newValue) {
    const newResume = { ...resume };
    newResume.bio[property] = newValue;
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
    newResume.leftContents[index].name = newValue;
    SetResume(newResume);
  }

  function updateInfoItem(infoIndex, itemIndex, property, newValue) {
    const newResume = { ...resume };
    newResume.leftContents[infoIndex].items[itemIndex][property] = newValue;
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
      newResume.leftContents[listIndex].items[itemIndex] = newValue;
    } else if (proficiencyType === "level") {
      newResume.leftContents[listIndex].items[itemIndex][property] = newValue;
    } else if (proficiencyType === "score") {
      newResume.leftContents[listIndex].items[itemIndex][property] = newValue;
    }
    SetResume(newResume);
  }

  function updateExperienceInfo(
    experienceIndex,
    itemIndex,
    property,
    newValue
  ) {
    const newResume = { ...resume };
    newResume.rightContents[experienceIndex].items[itemIndex][property] =
      newValue;
    SetResume(newResume);
    // console.log(newResume.rightContents[0].items[0]);
  }

  function updateExperienceList(
    experienceIndex,
    itemIndex,
    listIndex,
    newValue
  ) {
    const newResume = { ...resume };
    newResume.rightContents[experienceIndex].items[itemIndex].jobDetails[
      listIndex
    ] = newValue;
    SetResume(newResume);
  }

  function updateReference(referenceIndex, itemIndex, property, newValue) {
    const newResume = { ...resume };
    newResume.rightContents[referenceIndex].items[itemIndex][property] =
      newValue;
    SetResume(newResume);
  }

  function addItem() {
    const newResume = { ...resume };
    newResume.leftContents[0].items.push(infoTemplate);
    console.log(newResume.leftContents[0]);
    SetResume(newResume);
  }
  //leftContentIndex, type
  // console.log(resume.rightContents);
  useEffect(() => {
    addItem();
  }, []);

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
          updateExperienceInfo={updateExperienceInfo}
          updateExperienceList={updateExperienceList}
          updateReference={updateReference}
        />
        <Preview resume={resume} />
      </div>
    </>
  );
}

export default App;
