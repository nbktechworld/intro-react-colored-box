import "./styles.css";
import React from "react";
import Box from "./Box";

export default function App() {
  const [boxColor, setBoxColor] = React.useState("red"); //   ['red', function(newValue) { }]
  const [textColor, setTextColor] = React.useState(""); //camelCaseLikeThis

  function onChangeColorClick() {
    setBoxColor(textColor);
  }

  function onTextColorChange(event) {
    setTextColor(event.target.value);
  }

  return (
    <>
      <input type="text" value={textColor} onChange={onTextColorChange} />
      <button type="button" onClick={onChangeColorClick}>
        Change Color
      </button>
      <p>A paragraph</p>
      <p>Another paragraph</p>
      <Box color={boxColor}>box 1</Box>
      <h4>Another box:</h4>
      <Box color="blue">box 2</Box>
    </>
  );
}
