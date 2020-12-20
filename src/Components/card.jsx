import React from "react";
import "./Card.css";
import Detail from "./Detail";

function card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="my_pic" />
      </div>
      <div className="bottom">
        <Detail Detailinfo={props.tel} />
        <Detail Detailinfo={props.email} />
      </div>
    </div>
  );
}

export default card;
