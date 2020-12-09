import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello</h1>
  </div>,
  document.getElementById("root")
);

const name = "Moo";
const num = 6;
const fname = "moo";
const lname = "nasr";
const dt = new Date();

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <h1>Hello {fname + " " + lname}</h1>
    <h1>Hello {fname} {lname}</h1>
    <h1>Hello {`${fname} ${lname} 2`}</h1>
    <p>fav number is {num}</p>
    <p>fav number is {Math.floor(Math.random() * 10)}</p>
    <p>fav number is {2+4}</p>
<p> created by {fname} {lname} </p>
<p>Copyright {dt.getFullYear()}</p>
  </div>,
  document.getElementById("root2")
);
console.log(dt);

