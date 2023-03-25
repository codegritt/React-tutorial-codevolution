import React, { useState } from "react";
import withCounter from "../HOC/withCounter";

function ClickIncrease(props) {
  // eslint-disable-next-line no-unused-vars
  const [fontSize, setFontSize] = useState(10); //set initial value of Hook to 10.
  return (
    <div>
      {/*When clicked, increment the value of fontSize*/}
      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with click
      </button>
      {/*Set the font size of this text to the fontSize variable.*/}
      {/*Furthermore, display its value as well.*/}
      <p>Value of 'name' in ClickIncrease: {props.name}</p>
    </div>
  );
}
// export default ClickIncrease;
export default withCounter(ClickIncrease);
