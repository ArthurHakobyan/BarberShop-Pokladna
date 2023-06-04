import React from "react";

const Payment = (props) => {
  const handleCashClick = () => {
    props.addValueToTable();
    props.checkIfClicked("button1");
  };

  const handleCardClick = () => {
    props.addValueToTableCard();
    props.checkIfClicked("button2");
  };

  return (
    <div>
      <div>
        <h1 className="px-3 py-4 font-bold">{props.paymentId}</h1>
        <button
          onClick={handleCashClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-3 active:bg-blue-800"
        >
          Hotove
        </button>
        <button
          onClick={handleCardClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-3 active:bg-blue-800"
        >
          Kartou
        </button>
      </div>
    </div>
  );
};

export default Payment;
