import { userResume, infoTemplate } from "./modules/SampleObject";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/Form";
import Preview from "./components/preview/Preview";
import React, { useState, useEffect } from "react";

function App() {
  const [resume, SetResume] = useState(userResume);

  //data category
  function updateData({
    category,
    subCategory,
    mainId,
    subId,
    subSubId,
    property,
    newValue,
  } = {}) {
    const newResume = { ...resume };
    switch (category) {
      case "bio":
        newResume.bio[property] = newValue;
        break;
      case "contact":
        newResume.contact[mainId][property] = newValue;
        break;
      case "profile":
        newResume.profile.profileSummary = newValue;
        break;
      case "leftColumnTitle":
        newResume.leftContents[mainId].name = newValue;
        break;
      case "info":
        newResume.leftContents[mainId].items[subId][property] = newValue;
        break;
      case "list":
        if (subCategory === "none") {
          newResume.leftContents[mainId].items[subId] = newValue;
        } else if (subCategory === "level") {
          newResume.leftContents[mainId].items[subId][property] = newValue;
        } else if (subCategory === "score") {
          newResume.leftContents[mainId].items[subId][property] = newValue;
        }
        break;
      case "experienceInfo":
        newResume.rightContents[mainId].items[subId][property] = newValue;
        break;
      case "experienceList":
        newResume.rightContents[mainId].items[subId].jobDetails[subSubId] =
          newValue;
        break;
      case "reference":
        newResume.rightContents[mainId].items[subId][property] = newValue;
        break;
      default:
    }
    SetResume(newResume);
  }

  function updateContactIcon(contactId, newIconId, newIconClass) {
    const newResume = { ...resume };
    newResume.contact[contactId].iconid = newIconId;
    newResume.contact[contactId].iconName = newIconClass;
    SetResume(newResume);
    console.log(resume.contact);
  }

  function updateListItem(
    listIndex,
    itemIndex,
    proficiencyType,
    property,
    newValue,
    newResume
  ) {
    if (proficiencyType === "none") {
      newResume.leftContents[listIndex].items[itemIndex] = newValue;
    } else if (proficiencyType === "level") {
      newResume.leftContents[listIndex].items[itemIndex][property] = newValue;
    } else if (proficiencyType === "score") {
      newResume.leftContents[listIndex].items[itemIndex][property] = newValue;
    }
  }

  function updateExperienceInfo(
    experienceIndex,
    itemIndex,
    property,
    newValue,
    newResume
  ) {}

  function updateExperienceList(
    experienceIndex,
    itemIndex,
    listIndex,
    newValue,
    newResume
  ) {
    newResume.rightContents[experienceIndex].items[itemIndex].jobDetails[
      listIndex
    ] = newValue;
  }

  function updateReference(
    referenceIndex,
    itemIndex,
    property,
    newValue,
    newResume
  ) {
    newResume.rightContents[referenceIndex].items[itemIndex][property] =
      newValue;
  }

  function addItem() {
    const newResume = { ...resume };
    newResume.leftContents[0].items.push(infoTemplate);
    console.log(newResume.leftContents[0]);
    SetResume(newResume);
  }
  //leftContentIndex, type
  // console.log(resume.rightContents);
  // useEffect(() => {
  //   addItem();
  // }, []);

  return (
    <>
      <div className="main-container">
        {" "}
        <Form
          resume={resume}
          updateData={updateData}
          updateContactIcon={updateContactIcon}
        />
        <Preview resume={resume} />
      </div>
    </>
  );
}

export default App;
