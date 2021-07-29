import React from "react";

export default function DataEntry(props) {
  let inputAmount = React.createRef();
  let transaction = {};

  function handleClick(event) {
    let amount = Number(inputAmount.current.value);
    let operation = event.target.value;
    if (amount > 0) {
      transaction = { date: new Date(), amount: amount, operation: operation };

      if (
        operation.toLowerCase() === "remove" &&
        props.balance > 0 &&
        props.balance - amount >= 0
      ) {
        props.updateBalance(amount, operation);
        props.updateTransactions(transaction);
      } else if (operation.toLowerCase() === "add") {
        props.updateBalance(amount, operation);
        props.updateTransactions(transaction);
      } else {
        alert("Balance is too low to remove");
      }
    } else {
      alert("Amount should be greater than zero");
    }
    inputAmount.current.value = "0";
  }

  return (
    <div className="container bordered data-container overflow-auto">
      <div>
        <div className="py-1 ">
          <span className="h4">Balance : {props.balance}</span>
        </div>
        <div className="py-2 ">
          <input
            type="number"
            min="0"
            className="amount-input"
            ref={inputAmount}
            defaultValue="0"
          />
        </div>

        <div className="py-2 ">
          <span className="mx-1">
            <button
              className="btn btn-outline-secondary"
              value="Add"
              placeholder="Enter an amount"
              onClick={handleClick}
            >
              Add
            </button>
          </span>
          <span className="mx-1">
            <button
              className="btn btn-outline-secondary"
              value="Remove"
              onClick={handleClick}
            >
              Remove
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
