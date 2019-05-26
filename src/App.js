import React from "react";
import { render } from "react-dom";
import StateComponent from "./State";
import EffectComponent from "./Effect";
import ContextComponent from "./Context";
import RefComponent from "./Refs";
import ReducerComponent from "./Reducer";
import MemoComponent from "./Memo";

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
      <hr />
      <MemoComponent />
    </div>
  );
};

render(<App />, document.getElementById("root"));
