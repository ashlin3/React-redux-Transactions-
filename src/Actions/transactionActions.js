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
  let user_id = 'user123';
  return async (dispatch) => {
    try {
      const response = await fetch(
        'http://localhost:8080/user/user-transactions?uid=' + `${user_id}`
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
