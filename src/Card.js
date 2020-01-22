import React, { useState, useContext } from "react";
import CardContext from "./context/card/cardContext";
import AlertContext from "./context/alert/alertContext";
import Spinner from "./pages/Spinner";

import "./App.css";

const Card = () => {
  const [card, setCard] = useState({ cardNumber: "" });
  const cardContext = useContext(CardContext);
  const { verifyCard, loading } = cardContext;

  const { cardNumber } = card;
  const { cardData, error, clear } = cardContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const handleChange = e => {
    setCard({ ...card, [e.target.name]: e.target.value });

    // if (cardNumber.length >= 6) {
    //   handleAutoVerify();
    // }

    // if (cardNumber.length > 8 && cardNumber.length <= 16) {
    //   handleAutoVerify();
    // }

    if (error !== null) {
      clear();
    }
  };

  // const handleAutoVerify = () => {
  //   verifyCard(cardNumber);
  // };

  const handleSubmit = e => {
    e.preventDefault();

    if (cardNumber === "") {
      setAlert("Please enter a card number", "dark");
    } else if (cardNumber.length > 8 && cardNumber.length <= 16) {
      verifyCard(cardNumber);
    } else {
      verifyCard(cardNumber);
    }
  };

  const handleClick = () => {
    setCard({ cardNumber: "" });
  };

 
  if(loading && !error) return <Spinner />

  return (
    <div className="container">
      <div className="header">
        <h2 className="title_header">Verify Card (BINN/IIN)</h2>

        {cardData.success ? (
          <h3
            style={{
              fontWeight: "100",
              color: `${
                cardData.success.toString() === "true" ? "green" : "red"
              }`
            }}
          >
            Success: &#10004; {cardData.success.toString()}
          </h3>
        ) : (
          <h3 style={{ fontWeight: "100" }}>Success: ? </h3>
        )}
      </div>

      <div className="content_wrapper">
        <div className="card_input">
          <form onSubmit={handleSubmit} className="form-data">
            <div className="close" onClick={handleClick}>
              &#10008;
            </div>

            <input
              className="input"
              name="cardNumber"
              value={card.cardNumber}
              maxLength="16"
              onChange={handleChange}
            />
          </form>

          {error !== null ? (
            <span className="desc" style={{ color: "red" }}>
              {error}
            </span>
          ) : (
            <span className="desc">
              Enter the first 8 digits of a card number(BIN/IIN)
            </span>
          )}
        </div>
        <div className="card_details__container">
          <div className="scheme">
            <p className="light_dark title">SCHEME/NETWORK</p>
            {cardData.payload ? (
              <span className="card_value">
                {cardData.payload.scheme !== null
                  ? cardData.payload.scheme.toUpperCase()
                  : "?"}
              </span>
            ) : (
              <span style={{ color: "rgba(0, 0, 0, 0.4)" }}>?</span>
            )}
          </div>

          <div className="type">
            <p className="light_dark title">TYPE</p>
            {cardData.payload ? (
              <span className="card_value">
                {cardData.payload.type !== null
                  ? cardData.payload.type.toUpperCase()
                  : "?"}
              </span>
            ) : (
              <span style={{ color: "rgba(0, 0, 0, 0.4)" }}>?</span>
            )}
          </div>

          <div className="bank">
            <p className="light_dark title">BANK</p>
            {cardData.payload ? (
              <span className="card_value">
                {cardData.payload.bank !== null
                  ? cardData.payload.bank.toUpperCase()
                  : "?"}
              </span>
            ) : (
              <span style={{ color: "rgba(0, 0, 0, 0.4)" }}>?</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
