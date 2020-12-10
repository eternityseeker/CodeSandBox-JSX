import React from "react";
import Heading from "./Heading";
import List from "./List";

const num = 6;
const fname = "moo";
const lname = "nasr";
const dt = new Date();

function App() {
return <div>
   <Heading />
    <List></List>
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
    </div>
;
}
console.log(dt);

export default App;
