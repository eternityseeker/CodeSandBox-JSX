import React from "react";

const customeStyle = {
  color: "orange",
  fontSize: "20px",
  border: "1px solid black"
};

customeStyle.color = "violet";

const name = "Moo";

function Heading() {
  return <h1 style={customeStyle}>Hello {name}</h1>;
}

export default Heading;
