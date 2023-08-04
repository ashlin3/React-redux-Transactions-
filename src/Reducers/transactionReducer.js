import * as actionTypes from '../Actions/actionTypes';

const initialState = {
  transactions: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.transactions,
        error: null,
      };
    case actionTypes.FETCH_TRANSACTIONS_FAILURE:
      return {
        ...state,
        transactions: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
