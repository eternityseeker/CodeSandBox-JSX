import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div className="heading" 
  //contentEditable="false"
   spellCheck="false">
    <h1 style={{ color: "blue" }}>Hello</h1>
    <img src={img + "?grayscale"} alt="new pic" />
  </div>,
  document.getElementById("root")
);







ReactDOM.render(
   <App />   
,
  document.getElementById("root2")
);

