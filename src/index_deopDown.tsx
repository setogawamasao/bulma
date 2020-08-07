import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCog } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const changeDropDpwn = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Drop Down Sample</h1>
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
              onClick={changeDropDpwn}
            >
              <FontAwesomeIcon icon={faCog} size={"lg"} />

              <span className="icon is-small">
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </button>
          </div>
          {isOpenDropDown && (
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">
                  Dropdown item
                </a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">
                  With a divider
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <h1>dummy</h1>
    </section>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
