import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";

const App = () => {
  const [isOpenCardModal, setIsOpenCardModal] = useState(false);
  const [isOpenImageModal, setIsOpenImageModal] = useState(false);
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Modal Sample</h1>
        <input
          type="button"
          value="Open Modal"
          className="button"
          onClick={(): void => {
            setIsOpenCardModal(true);
          }}
        />
        {isOpenCardModal && (
          <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Modal title</p>
                <button
                  className="delete"
                  aria-label="close"
                  onClick={(): void => {
                    setIsOpenCardModal(false);
                  }}
                ></button>
              </header>
              <section className="modal-card-body">
                {/* image modal */}
                <input
                  type="button"
                  className="button"
                  value="Open Image"
                  onClick={(): void => {
                    setIsOpenImageModal(true);
                  }}
                />
                {isOpenImageModal && (
                  <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-content">
                      <p className="image is-4by3">
                        <img
                          src="https://bulma.io/images/placeholders/1280x960.png"
                          alt="image"
                        />
                      </p>
                    </div>
                    <button
                      className="modal-close is-large"
                      aria-label="close"
                      onClick={(): void => {
                        setIsOpenImageModal(false);
                      }}
                    ></button>
                  </div>
                )}
              </section>
              <footer className="modal-card-foot">
                <button className="button is-success">Save changes</button>
                <button className="button">Cancel</button>
              </footer>
            </div>
          </div>
        )}
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
