import React from "react";

// const DestArray = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} aka {heroName}
//       </h1>
//     </div>
//   );
// };

const DestArray = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} aka {heroName}
      </h1>
    </div>
  );
};

export default DestArray;
