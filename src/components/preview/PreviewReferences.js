import React from "react";
import PreviewReference from "./PreviewReference";
function PreviewReferences({ references }) {
  return (
    <>
      <section className="reference-container">
        <div className="title">Reference</div>
        <div className="spacer"></div>
        <div className="reference-items-container">
          {references.items.map((reference, id) => {
            return <PreviewReference key={id} reference={reference} />;
          })}
        </div>
      </section>
    </>
  );
}

export default PreviewReferences;
