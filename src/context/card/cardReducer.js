import {
  VERIFY_CARD,
  INVALID_CARD,
  GET_STATS,
  INVALID_PAGINATION,
  REMOVE_INVALID_PAGINATION,
  CLEAR
} from "../../Types";

export default (state, action) => {
  switch (action.type) {
    case VERIFY_CARD:
      return {
        ...state,
        cardData: action.payload,
        error: null
      };
    case GET_STATS:
      return {
        ...state,
        cardStats: action.payload
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
    default:
      return state;
  }
};
