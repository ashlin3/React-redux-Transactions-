import React from 'react';
import './style.css';
import Transactions from './Transactions';
import Login from './login/login';
export default function App() {
  return (
    <div>
      <Transactions />
      <Login />
    </div>
  );
}
