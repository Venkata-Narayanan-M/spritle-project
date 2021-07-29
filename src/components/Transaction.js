import React from "react";

export default function Transaction(props) {
  const transactions = props.transactions;
  return (
    <div className="container bordered txn-container overflow-auto">
      <div className="row">
        <p className="h4">Transactions:</p>
      </div>
      <div>
        {transactions.map((item, idx) => {
          return (
            <div className="txn-text" key={idx}>
              <span>{item.date.toISOString()}</span>
              {" - "}
              <span>{item.amount}</span>
              {" - "}
              <span>{item.operation}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
