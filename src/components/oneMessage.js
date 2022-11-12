import React from "react";

function OneMessage(props) {
  return (
    <li key={props}>
      <p><span className="text-primary">{props.user}</span>: {props.message_text}</p>
    </li>
  );
}

export { OneMessage };