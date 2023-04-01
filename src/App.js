import "./App.css";
import { jsPDF } from "jspdf";
import { defaultResume, objectTemplate } from "./modules/SampleObject";
import Footer from "./components/Footer";
import Form from "./components/form/Form";
import Navbar from "./components/Navbar";
import Preview from "./components/preview/Preview";
import React, { useState, useEffect } from "react";

function App() {
  const [resume, SetResume] = useState(
    JSON.parse(localStorage.getItem("savedResume")) || defaultResume
  );

  useEffect(() => {
    localStorage.setItem("savedResume", JSON.stringify(resume));
  }, [resume]);

  function removeData({ category, mainId, subId, subSubId } = {}) {
    const newResume = { ...resume };
    switch (category) {
      case "contact":
        newResume.contact.splice(mainId, 1);
        break;
      case "formInfo":
      case "formList":
        newResume.leftContents.splice(mainId, 1);
        break;
      case "formExperience":
      case "formReference":
        newResume.rightContents.splice(mainId, 1);
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
        newResume.leftContents[mainId].items.push(
          objectTemplate.infoTemplate.items[0]
        );
        break;
      case "listlevel":
        newResume.leftContents[mainId].items.push(
          objectTemplate.listProficiencyTemplate.items[0]
        );
        break;
      case "listnone":
        newResume.leftContents[mainId].items.push(
          objectTemplate.listBasicTemplate.items[0]
        );
        break;
      case "listscore":
        newResume.leftContents[mainId].items.push(
          objectTemplate.listScoreTemplate.items[0]
        );
        break;
      case "experience":
        newResume.rightContents[mainId].items.push(
          objectTemplate.experienceTemplate.items[0]
        );
        break;
      case "experienceList":
        newResume.rightContents[mainId].items[subId].jobDetails.push(
          objectTemplate.experienceListTemplate
        );
        break;
      case "reference":
        newResume.rightContents[mainId].items.push(
          objectTemplate.referenceTemplate.items[0]
        );
        break;
      case "infoSection":
        newResume.leftContents.push(objectTemplate.infoTemplate);
        break;
      case "listBasicSection":
        newResume.leftContents.push(objectTemplate.listBasicTemplate);
        break;
      case "listProficiencySection":
        newResume.leftContents.push(objectTemplate.listProficiencyTemplate);
        break;
      case "listScoreSection":
        newResume.leftContents.push(objectTemplate.listScoreTemplate);
        break;
      case "experienceSection":
        newResume.rightContents.push(objectTemplate.experienceTemplate);
        break;
      case "referenceSection":
        newResume.rightContents.push(objectTemplate.referenceTemplate);
        break;
      default:
        break;
    }
    SetResume(newResume);
  }

  function saveAsPDF(callback) {
    //multiplier used because jsPDF output doesn't match declared paper size
    const multiplier = 0.945;
    const report = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: [841.89 * multiplier, 1190.55 * multiplier],
    });
    toggleBorder();
    report.html(document.querySelector(".preview-container")).then(() => {
      report.save("preview.pdf");
    });
    const myTimeout = setTimeout(toggleBorder, 2000);
  }

  function toggleBorder() {
    document
      .querySelector(".preview-container")
      .classList.toggle("show-border");
    document.querySelector(".resume-content").classList.toggle("show-border");
  }

  return (
    <>
      <Navbar saveAsPDF={saveAsPDF} />
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
      <Footer />
    </>
  );
}

export default App;
