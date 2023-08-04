import * as actionTypes from './actionTypes';

export const fetchTransactionsSuccess = (transactions) => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_SUCCESS,
    transactions: transactions,
  };
};

export const fetchTransactionsFailure = (error) => {
  return {
    type: actionTypes.FETCH_TRANSACTIONS_FAILURE,
    error: error,
  };
};

export const fetchTransactions = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:8080/user/user-transactions?uid=user123'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      const data = await response.json();
      dispatch(fetchTransactionsSuccess(data));
    } catch (error) {
      dispatch(fetchTransactionsFailure(error.message));
    }
  };
};
