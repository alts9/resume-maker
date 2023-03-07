import React from "react";
import FormExperienceList from "./FormExperienceList";
import TextInput from "./element/TextInput";
function FormExperience({
  itemId,
  experience,
  experienceId,
  updateExperienceInfo,
  updateExperienceList,
}) {
  function handleChange(e) {
    updateExperienceInfo(experienceId, itemId, e.target.name, e.target.value);
  }
  return (
    <>
      <TextInput
        labelText="Job Title:"
        inputName="jobTitle"
        inputOnChange={handleChange}
        inputDefault={experience.jobTitle}
      />
      <TextInput
        labelText="Company:"
        inputName="companyName"
        inputOnChange={handleChange}
        inputDefault={experience.companyName}
      />
      <TextInput
        labelText="Location:"
        inputName="location"
        inputOnChange={handleChange}
        inputDefault={experience.location}
      />
      <TextInput
        labelText="Year Start:"
        inputName="yearStart"
        inputOnChange={handleChange}
        inputDefault={experience.yearStart}
      />
      <TextInput
        labelText="Year End:"
        inputName="yearEnd"
        inputOnChange={handleChange}
        inputDefault={experience.yearEnd}
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
          <div className="input-subgroup">
            <FormExperienceList
              key={index}
              experienceId={experienceId}
              itemId={itemId}
              listItemId={index}
              detailsItem={detailsItem}
              updateExperienceList={updateExperienceList}
            />
          </div>
        );
      })}
    </>
  );
}

export default FormExperience;
