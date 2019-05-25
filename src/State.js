import React, { useState } from "react";

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(true);

  return (
    <button
      onClick={() => setIsGreen(!isGreen)}
      style={{ padding: 10, color: isGreen ? "limegreen" : "crimson" }}
    >
      useState example
    </button>
  );
};

export default StateComponent;
