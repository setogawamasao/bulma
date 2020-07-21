import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <div className="field">
      <label className="label">Label</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
      <p className="help">This is a help text</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
