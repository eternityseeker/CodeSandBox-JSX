import React from "react";
import "./Card.css";
import Card from "./card";
import contacts from "./contacts";

function createcard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

function card2(props) {
  return (
    <div>
      <div>{contacts.map(createcard)}</div>
      <div>
        {contacts.map((contact) => (
          <Card
            id={contact.id}
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.tel}
            email={contact.email}
          />
        ))}
      </div>
    </div>
  );
}

export default card2;
