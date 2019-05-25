import React, { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return <h1>useEffect example: {time.toLocaleTimeString()}</h1>;
};

export default EffectComponent;
