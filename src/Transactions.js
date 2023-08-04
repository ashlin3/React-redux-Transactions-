import React, { useEffect } from 'react';
import './transactions.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from './Actions/transactionActions';

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);
  const error = useSelector((state) => state.transactions.error);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Sender Account No</th>
            <th>Receiver Account No</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.transId}>
              <td>{transaction.transId}</td>
              <td>{transaction.senderAccountNo}</td>
              <td>{transaction.receiverAccountNo}</td>
              <td>${transaction.amount}</td>
              <td>{new Date(transaction.dateTime).toLocaleString()}</td>
              <td>{transaction.transStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
