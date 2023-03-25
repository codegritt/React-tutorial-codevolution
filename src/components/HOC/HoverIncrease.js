import React, { useState } from "react";
import withCounter from "../HOC/withCounter";

function HoverIncrease(props) {
  // eslint-disable-next-line no-unused-vars
  const [fontSize, setFontSize] = useState(10);
  return (
    <div>
      {/*This time, instead of listening to clicks,*/}
      {/*Listen to hover events instead*/}
      <button onMouseOver={() => setFontSize((size) => size + 1)}>
        Increase on hover
      </button>
      <p> Value of 'name' in HoverIncrease: {props.name}</p>
    </div>
  );
}
// export default HoverIncrease;
export default withCounter(HoverIncrease);
