import React from "react";
import FormExperienceList from "./FormExperienceList";

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
      {" "}
      <label>
        Job Title:
        <input
          type="text"
          name="jobTitle"
          onChange={handleChange}
          defaultValue={experience.jobTitle}
        />
      </label>
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          onChange={handleChange}
          defaultValue={experience.companyName}
        />
      </label>{" "}
      <label>
        Location:
        <input
          type="text"
          name="location"
          onChange={handleChange}
          defaultValue={experience.location}
        />
      </label>
      <label>
        Year Start:
        <input
          type="text"
          name="yearStart"
          onChange={handleChange}
          defaultValue={experience.yearStart}
        />
      </label>
      <label>
        Year End:
        <input
          type="text"
          name="yearEnd"
          onChange={handleChange}
          defaultValue={experience.yearEnd}
        />
      </label>
      <label>
        Summary:
        <textarea
          type="text"
          name="jobSummary"
          onChange={handleChange}
          defaultValue={experience.jobSummary}
        />
      </label>
      {experience.jobDetails.map((detailsItem, index) => {
        return (
          <FormExperienceList
            key={index}
            experienceId={experienceId}
            itemId={itemId}
            listItemId={index}
            detailsItem={detailsItem}
            updateExperienceList={updateExperienceList}
          />
        );
      })}
    </>
  );
}

export default FormExperience;
