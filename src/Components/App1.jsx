import React from "react";
import Heading1 from "./Heading1";
import Card2 from "./card2";

const customeStyle = {
  display: "flex"
};

function App1() {
  return (
    <div style={customeStyle}>
      <div className="flex-div">
        <Heading1 />
      </div>
      <div className="flex-div">
        <Card2 />
      </div>
    </div>
  );
}

export default App1;
