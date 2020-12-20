import React from "react";
import Heading1 from "./Heading1";
import Card from "./card";
import contacts from "./contacts";

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
        <Card name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].tel}
         email={contacts[0].email} />
      </div>
    </div>
  );
}

export default App1;
