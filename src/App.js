import React, { useState } from "react";
import Header from "./components/Header";
import DataEntry from "./components/DataEntry";
import Transaction from "./components/Transaction";

function App() {
  let [balance, setBalance] = useState(0);
  let [transactions, setTransactions] = useState([]);

  function updateBalance(amount, operation) {
    if (operation.toLowerCase() === "add")
      setBalance((prevBalance) => prevBalance + amount);
    else setBalance((prevBalance) => prevBalance - amount);
  }

  function updateTransactions(newTransaction) {
    setTransactions((oldTranscations) => [...oldTranscations, newTransaction]);
  }

  return (
    <div className="App">
      <div className="container bordered">
        <div className="row my-2 py-2">
          <Header />
        </div>
        <div className="row my-2 py-2">
          <div className="container">
            <DataEntry
              balance={balance}
              updateBalance={updateBalance}
              updateTransactions={updateTransactions}
            />
          </div>
        </div>
        <div className="row my-2 py-2">
          <div className="container">
            <Transaction transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
