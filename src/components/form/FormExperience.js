import React from "react";
import FormExperienceList from "./FormExperienceList";
import TextInput from "./element/TextInput";
import AddButton from "./element/AddButton";
function FormExperience({
  itemId,
  experience,
  experienceId,
  updateData,
  addData,
  removeData,
}) {
  function handleChange(e) {
    updateData({
      category: "experienceInfo",
      mainId: experienceId,
      subId: itemId,
      property: e.target.name,
      newValue: e.target.value,
    });
  }
  function handleAdd() {
    addData({
      category: "experienceList",
      mainId: experienceId,
      subId: itemId,
    });
  }
  function handleRemove() {
    removeData({
      category: "itemExperience",
      mainId: experienceId,
      subId: itemId,
    });
  }

  return (
    <>
      <div className="input-item">
        <div className="">
          {" "}
          <TextInput
            labelText="Job Title:"
            inputName="jobTitle"
            inputOnChange={handleChange}
            inputValue={experience.jobTitle}
          />
          <TextInput
            labelText="Company:"
            inputName="companyName"
            inputOnChange={handleChange}
            inputValue={experience.companyName}
          />
          <TextInput
            labelText="Location:"
            inputName="location"
            inputOnChange={handleChange}
            inputValue={experience.location}
          />
          <TextInput
            labelText="Year Start:"
            inputName="yearStart"
            inputOnChange={handleChange}
            inputValue={experience.yearStart}
          />
          <TextInput
            labelText="Year End:"
            inputName="yearEnd"
            inputOnChange={handleChange}
            inputValue={experience.yearEnd}
          />
          <label htmlFor="jobSummary">Summary:</label>
          <textarea
            type="text"
            name="jobSummary"
            onChange={handleChange}
            defaultValue={experience.jobSummary}
          />
          {experience.jobDetails.map((detailsItem, index) => {
            return (
              <FormExperienceList
                key={index}
                experienceId={experienceId}
                itemId={itemId}
                listItemId={index}
                detailsItem={detailsItem}
                updateData={updateData}
                removeData={removeData}
              />
            );
          })}
        </div>
        <button onClick={handleRemove} className="remove">
          X
        </button>
      </div>

      <AddButton handleAdd={handleAdd} text={"Add list item"} />
    </>
  );
}

export default FormExperience;
