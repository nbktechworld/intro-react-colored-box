import React from "react";

export default function Box(props) {
  return (
    <div className="box" style={{ backgroundColor: props.color }}>
      {props.children}
    </div>
  );
}
// nbktechworld NBK TECH WORLD
