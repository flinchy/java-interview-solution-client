import React, { useReducer } from "react";
import CardContext from "./cardContext";
import CardReducer from "./cardReducer";
import axios from "axios";

import {
  VERIFY_CARD,
  INVALID_CARD,
  INVALID_PAGINATION,
  GET_STATS,
  CLEAR,
  REMOVE_INVALID_PAGINATION
} from "../../Types";

const VerifyCardState = props => {
  const initialState = {
    cardData: {},
    cardStats: null,
    error: null,
    statError: null
  };

  const [state, dispatch] = useReducer(CardReducer, initialState);

  const verifyCard = async card => {
    // e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8080/card-scheme/verify/` + card
      );

      dispatch({
        type: VERIFY_CARD,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: INVALID_CARD,
        payload: error.response
          ? error.response.data.error
          : "Something went wrong"
      });
    }
  };

  const getCardStats = async (start, limit) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/card-scheme/stats?start=${start}&limit=${limit}`
      );
      dispatch({
        type: GET_STATS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: INVALID_PAGINATION,
        payload: error.response
          ? error.response.data.pageError
          : "Something went wrong"
      });

      setTimeout(() => dispatch({ type: REMOVE_INVALID_PAGINATION }), 7000);
    }
  };

  const clear = () => {
    dispatch({ type: CLEAR });
  };

  return (
    <CardContext.Provider
      value={{
        cardData: state.cardData,
        cardStats: state.cardStats,
        statError: state.statError,
        error: state.error,
        verifyCard,
        getCardStats,
        clear
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default VerifyCardState;
