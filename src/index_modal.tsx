import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

const App = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Modal Sample</h1>
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">aaaa</section>
            <footer className="modal-card-foot">
              <button className="button is-success">Save changes</button>
              <button className="button">Cancel</button>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
