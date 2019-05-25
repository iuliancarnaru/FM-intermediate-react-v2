import React from "react";
import { render } from "react-dom";
import StateComponent from "./State";
import EffectComponent from "./Effect";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <StateComponent />
      <hr />
      <EffectComponent />
    </div>
  );
};

render(<App />, document.getElementById("root"));
