import React from "react";

// function Child(props) {
//   return (
//     <div>
//       <button onClick={props.greetHandler}>Greet parent</button>
//     </div>
//   );
// }

function Child(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Subscribe</button>
    </div>
  );
}

export default Child;
