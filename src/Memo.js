import React, { useState, useMemo } from "react";

const fibonacci = n => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// performance optimisation
const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <button
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useMemo Example
      </button>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  );
};

export default MemoComponent;
