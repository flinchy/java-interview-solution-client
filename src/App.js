import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
       <div className="header">
          <h2 className="title_header">Verify Card (BINN/INN)</h2>
        </div>

      <div className="content_wrapper">
        <div className="close">x</div>

        <div className="card_input">
          <input className="input" maxLength = "16"/>
          <span className="desc">
            Enter the first digits of a card number(BIN/IIN)
          </span>
        </div>
        <div className="card_details__container">
          <div className="scheme">
            <p className="light_dark title">SCHEME/NETWORK</p>
            <span className="card_value">Visa</span>
          </div>

          <div className="type">
            <p className="light_dark title">TYPE</p>
            <span className="card_value">Debit/Credit</span>
          </div>

          <div className="bank">
            <p className="light_dark title">BANK</p>
            <span className="card_value">Jyske Bank, Hjörring</span>
          </div>
        </div>

        <div className="card_details__container_two">
          <div className="scheme">
            <p className="light_dark title">BRAND</p>
            <span className="card_value">Visa/Dankort</span>
          </div>

          <div className="type">
            <p className="light_dark title">PREPAID</p>
            <span className="card_value">YES/NO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
