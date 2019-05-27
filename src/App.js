import React from "react";
import { render } from "react-dom";
import StateComponent from "./State";
import EffectComponent from "./Effect";
import ContextComponent from "./Context";
import RefComponent from "./Refs";
import ReducerComponent from "./Reducer";
import MemoComponent from "./Memo";
import CallbackComponent from "./Callback";
import LayoutEffectComponent from "./LayoutEffect";
import ImperativeHandleComponent from "./ImperativeHandle";

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
      <hr />
      <CallbackComponent />
      <hr />
      <LayoutEffectComponent />
      <hr />
      <ImperativeHandleComponent />
    </div>
  );
};

render(<App />, document.getElementById("root"));
