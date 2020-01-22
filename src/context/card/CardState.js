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
  REMOVE_INVALID_PAGINATION,
  SET_LOADING,
  SET_LOADING_FOR_STAT
} from "../../Types";

const VerifyCardState = props => {
  const initialState = {
    cardData: {},
    cardStats: null,
    error: null,
    statError: null,
    loading: false,
    loadingForStat: false
  };

  const [state, dispatch] = useReducer(CardReducer, initialState);

  const verifyCard = async card => {
    // e.preventDefault();
    setLoading();

    try {
      const response = await axios.get(
        `https://chisom-verifier.herokuapp.com/card-scheme/verify/` + card
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
    setLoadingForStat();

    try {
      const response = await axios.get(
        `https://chisom-verifier.herokuapp.com/card-scheme/stats?start=${start}&limit=${limit}`
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

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setLoadingForStat = () => dispatch({ type: SET_LOADING_FOR_STAT});

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
        loading: state.loading,
        loadingForStat: state.loadingForStat,
        verifyCard,
        getCardStats,
        clear,
        setLoading,
        setLoadingForStat
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default VerifyCardState;
