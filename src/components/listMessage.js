import React from "react";
function ListMessage(props) {
  return (
    <ul>
      {props.children}
    </ul>
  );
}
export { ListMessage };