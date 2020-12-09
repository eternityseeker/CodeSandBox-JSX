import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div className="heading" contentEditable="false" spellCheck="false">
    <h1 style={{ color : "blue" }} >Hello</h1>
    <img src={img + "?grayscale"} alt="new pic" />
  </div>,
  document.getElementById("root")
);

const name = "Moo";
const num = 6;
const fname = "moo";
const lname = "nasr";
const dt = new Date();

const customeStyle = {
color : "orange",
fontSize : "20px",
border : "1px solid black"
};

customeStyle.color = "violet";

ReactDOM.render(
  <div>
    <h1 style={customeStyle}>Hello {name}</h1>
    <h1>Hello {fname + " " + lname}</h1>
    <h1>
      Hello {fname} {lname}
    </h1>
    <h1>Hello {`${fname} ${lname} 2`}</h1>
    <p>fav number is {num}</p>
    <p>fav number is {Math.floor(Math.random() * 10)}</p>
    <p>fav number is {2 + 4}</p>
    <p>
      {" "}
      created by {fname} {lname}{" "}
    </p>
    <p>Copyright {dt.getFullYear()}</p>
  </div>,
  document.getElementById("root2")
);
console.log(dt);
