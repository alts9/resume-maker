import React from "react";

function PreviewReference({ reference }) {
  return (
    <>
      <div className="reference-item">
        <div className="name">{reference.name}</div>
        <div className="job-title">{reference.jobTitle}</div>
        <div className="company-name">{reference.companyName}</div>
        <div className="phone">{reference.phone}</div>
        <div className="email">{reference.email}</div>
      </div>
    </>
  );
}

export default PreviewReference;
