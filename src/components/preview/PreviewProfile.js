import React from "react";

function PreviewProfile({ profile }) {
  return (
    <>
      <div className="title">Profile</div>
      <div className="spacer"></div>
      <div className="content">{profile.profileSummary}</div>
    </>
  );
}

export default PreviewProfile;
