import React from "react";
import PreviewList from "./PreviewList";

function PreviewLists({ list }) {
  return (
    <>
      <section className="list-container">
        <div className="title">{list.name}</div>
        <div className="spacer"></div>
        <ul className="list-item-container">
          {list.items.map((item, id) => {
            return (
              <PreviewList
                key={id}
                item={item}
                proficiencyType={list.proficiencyType}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default PreviewLists;
