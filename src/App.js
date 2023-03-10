import { userResume, objectTemplate } from "./modules/SampleObject";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/Form";
import Preview from "./components/preview/Preview";
import React, { useState, useEffect } from "react";

function App() {
  const [resume, SetResume] = useState(userResume);

  function removeData({ category, mainId, subId, subSubId } = {}) {
    const newResume = { ...resume };
    switch (category) {
      case "contact":
        newResume.contact.splice(mainId, 1);
        newResume.contact = [];
        break;
      case "formInfo":
      case "formList":
        newResume.leftContents.splice(mainId, 1);
        break;
      case "itemInfo":
      case "itemList":
        newResume.leftContents[mainId].items.splice(subId, 1);
        break;
      case "itemListExperience":
        newResume.rightContents[mainId].items[subId].jobDetails.splice(
          subSubId,
          1
        );
        break;
      case "itemExperience":
      case "itemReference":
        newResume.rightContents[mainId].items.splice(subId, 1);
        break;
      default:
        break;
    }
    SetResume(newResume);
  }

  //leftContentIndex, type
  // console.log(resume.rightContents);
  // useEffect(() => {
  //   removeData({ category: "contact", mainId: 0 });
  //   // console.log(resume);
  // }, []);

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
    newResume.contact[contactId].iconId = newIconId;
    newResume.contact[contactId].iconName = newIconClass;
    SetResume(newResume);
  }

  function addData({ category, mainId, subId } = {}) {
    const newResume = { ...resume };
    switch (category) {
      case "contact":
        newResume.contact.push(objectTemplate.contactTemplate);
        break;
      case "info":
        newResume.leftContents[mainId].items.push(objectTemplate.infoTemplate);
        break;
      case "listlevel":
        newResume.leftContents[mainId].items.push(
          objectTemplate.listProficiencyTemplate
        );
        break;
      case "listnone":
        newResume.leftContents[mainId].items.push(
          objectTemplate.listBasicTemplate
        );
        break;
      case "listscore":
        newResume.leftContents[mainId].items.push(
          objectTemplate.listScoreTemplate
        );
        break;
      case "experience":
        newResume.rightContents[mainId].items.push(
          objectTemplate.experienceTemplate
        );
        break;
      case "experienceList":
        newResume.rightContents[mainId].items[subId].jobDetails.push(
          objectTemplate.experienceListTemplate
        );
        break;
      case "reference":
        newResume.rightContents[mainId].items.push(
          objectTemplate.referenceTemplate
        );
        break;
      default:
        break;
    }
    SetResume(newResume);
  }

  return (
    <>
      <div className="main-container">
        <Form
          resume={resume}
          updateData={updateData}
          updateContactIcon={updateContactIcon}
          addData={addData}
          removeData={removeData}
        />
        <Preview resume={resume} />
      </div>
    </>
  );
}

export default App;
