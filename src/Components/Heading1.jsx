import React from "react";

const img = "https://picsum.photos/200";

function Heading1() {
  return (
    <div>
      <div
        className="heading"
        //contentEditable="false"
        spellCheck="false"
      >
        <h1 style={{ color: "blue" }}>Hello</h1>
        <img src={img + "?grayscale"} alt="new pic" />
      </div>
    </div>
  );
}

export default Heading1;
