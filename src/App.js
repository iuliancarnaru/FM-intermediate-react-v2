import React from "react";
import { render } from "react-dom";
import StateComponent from "./State";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <StateComponent />
      <hr />
    </div>
  );
};

render(<App />, document.getElementById("root"));
