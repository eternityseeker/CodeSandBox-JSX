import React from "react";
import Heading from "./Heading";
import List from "./List";
//import PIPIPI, {pi2,pi3} from "../Extra/math"
import * as PI from "../Extra/math"
import * as Calculator from "../Extra/calculator"

const num = 6;
const fname = "moo";
const lname = "nasr";
const dt = new Date();

function App() {
return <div>
  <table border="1" >
  <tbody>
<tr>
  <td>
   <Heading />
    <List></List>
    <h1>Hello {fname + " " + lname}</h1>
    <h1>
      Hello {fname} {lname}
    </h1>
    <h1>Hello {`${fname} ${lname} 2`}</h1>
    <p>fav number is {num}</p>
    <p>fav number is {Math.floor(Math.random() * 10)}</p>
    <p>fav number is {2 + 4} or {PI.default} or {PI.pi2}</p>
    <p>
      {" "}
      created by {fname} {lname}{" "}
    </p>
    <p>Copyright {dt.getFullYear()}</p>
    </td>
    <td>
<ul>
  <li>{Calculator.add(1,2)}</li>
  <li>{Calculator.multiply(2,3)}</li>
  <li>{Calculator.subtract(5,2)}</li>
  <li>{Calculator.divide(9,3)}</li>
</ul>
      </td>
      </tr>
      </tbody>
    </table>
    </div>
;
}
console.log(dt);

export default App;
