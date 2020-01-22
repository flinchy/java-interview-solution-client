import {
  VERIFY_CARD,
  INVALID_CARD,
  GET_STATS,
  INVALID_PAGINATION,
  REMOVE_INVALID_PAGINATION,
  CLEAR,
  SET_LOADING,
  SET_LOADING_FOR_STAT
} from "../../Types";

export default (state, action) => {
  switch (action.type) {
    case VERIFY_CARD:
      return {
        ...state,
        cardData: action.payload,
        error: null,
        loading: false
      };
    case GET_STATS:
      return {
        ...state,
        cardStats: action.payload,
        loadingForStat: false
      };
    case CLEAR:
      return {
        ...state,
        cardData: {}
      };
    case INVALID_CARD:
      return {
        ...state,
        error: action.payload
      };
    case INVALID_PAGINATION:
      return {
        ...state,
        statError: action.payload
      };
    case REMOVE_INVALID_PAGINATION:
      return {
        ...state,
        statError: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_LOADING_FOR_STAT:
      return {
        ...state,
        loadingForStat: true,
      };

    default:
      return state;
  }
};
