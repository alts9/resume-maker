import React from "react";
import PreviewInfo from "./PreviewInfo";

function PreviewInfos({ info }) {
  return (
    <>
      <section className="info-container">
        {" "}
        <div className="title">{info.name}</div>
        <div className="spacer"></div>
        {info.items.map((item, id) => {
          return <PreviewInfo key={id} item={item} />;
        })}
      </section>
    </>
  );
}

export default PreviewInfos;
