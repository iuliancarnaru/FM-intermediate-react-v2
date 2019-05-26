import React from "react";
import { render } from "react-dom";
import StateComponent from "./State";
import EffectComponent from "./Effect";
import ContextComponent from "./Context";
import RefComponent from "./Refs";
import ReducerComponent from "./Reducer";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <StateComponent />
      <hr />
      <EffectComponent />
      <hr />
      <ContextComponent />
      <hr />
      <RefComponent />
      <hr />
      <ReducerComponent />
    </div>
  );
};

render(<App />, document.getElementById("root"));
