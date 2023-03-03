import { userResume } from "./modules/SampleObject";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form/Form";
import Preview from "./components/preview/Preview";
import React, { useState, useEffect } from "react";

function App() {
  const [resume, SetResume] = useState(userResume);
  function updateBio(variable, value) {
    const newResume = { ...resume };
    newResume.bio[variable] = value;
    SetResume(newResume);
  }

  function updateContact(id, variable, value) {
    const newResume = { ...resume };
    newResume.contact[id][variable] = value;
    SetResume(newResume);
    // console.log(resume.contact[id]);
  }
  // console.log(resume.contact[0]);

  React.useEffect(() => {
    updateContact(0, "icon", "sdsdsd");
  }, []);
  return (
    <>
      <div className="container">
        {" "}
        <Form resume={resume} updateBio={(updateBio, updateContact)} />
        <Preview resume={resume} />
      </div>
    </>
  );
}

export default App;
