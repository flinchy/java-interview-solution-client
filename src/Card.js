import React, { useState } from "react";
import axios from 'axios';
import "./App.css";

const Card = () => {
  const [card, setCard] = useState("");

  const handleSubmit = async e => {
    // e.preventDefault();
    const response = await axios.get(
      "http://localhost:8080/card-scheme/verify/" + card
    );
    console.log(response);
  };

  const handleChange = e => {
    setCard(e.target.value);
    if (card.length > 6) {
      handleSubmit();
    }
  };

  const handleClick = () => {
    setCard("");
  };

  return (
    <div className="container">
      <div className="header">
        <h2 className="title_header">Verify Card (BINN/INN)</h2>
      </div>

      <div className="content_wrapper">
        <div className="close" onClick={handleClick}>
          &#10008;
        </div>

        <div className="card_input">
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              name="cardNumber"
              value={card}
              maxLength="16"
              onChange={handleChange}
            />
          </form>

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
};

export default Card;
