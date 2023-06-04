import React, { useState } from "react";
import Table from "./Table";
import Payment from "./Payment";

const PAYMENT_ID = [
  "Klasické stříhání",
  "Úprava vousů",
  "Stříhání strojkem",
  "Klasické stříhání s úpravou vousů",
  "Stříhání strojkem s úpravou vousů",
  "Tradiční holení",
];

const Person = (props) => {
  const [isVisibleFirst, setIsVisibleFirst] = useState(false);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  const [isVisibleThird, setIsVisibleThird] = useState(false);
  const [isVisibleFourth, setIsVisibleFourth] = useState(false);
  const [isVisibleFifth, setIsVisibleFifth] = useState(false);
  const [isVisibleSixth, setIsVisibleSixth] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [tableDataCard, setTableDataCard] = useState([]);

  const [clickedButton, setClickedButton] = useState("");

  // Check if Cash button clicked or Card button clicked
  const handleClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  //toggling the components
  const serviceOneHandler = () => {
    setIsVisibleFirst(!isVisibleFirst);
    setIsVisibleSecond(false);
    setIsVisibleThird(false);
    setIsVisibleFourth(false);
    setIsVisibleFifth(false);
    setIsVisibleSixth(false);
  };

  const serviceTwoHandler = () => {
    setIsVisibleFirst(false);
    setIsVisibleSecond(!isVisibleSecond);
    setIsVisibleThird(false);
    setIsVisibleFourth(false);
    setIsVisibleFifth(false);
    setIsVisibleSixth(false);
  };

  const serviceThreeHandler = () => {
    setIsVisibleFirst(false);
    setIsVisibleSecond(false);
    setIsVisibleThird(!isVisibleThird);
    setIsVisibleFourth(false);
    setIsVisibleFifth(false);
    setIsVisibleSixth(false);
  };

  const serviceFourHandler = () => {
    setIsVisibleFirst(false);
    setIsVisibleSecond(false);
    setIsVisibleThird(false);
    setIsVisibleFourth(!isVisibleFourth);
    setIsVisibleFifth(false);
    setIsVisibleSixth(false);
  };

  const serviceFiveHandler = () => {
    setIsVisibleFirst(false);
    setIsVisibleSecond(false);
    setIsVisibleThird(false);
    setIsVisibleFourth(false);
    setIsVisibleFifth(!isVisibleFifth);
    setIsVisibleSixth(false);
  };

  const serviceSixHandler = () => {
    setIsVisibleFirst(false);
    setIsVisibleSecond(false);
    setIsVisibleThird(false);
    setIsVisibleFourth(false);
    setIsVisibleFifth(false);
    setIsVisibleSixth(!isVisibleSixth);
  };

  //adding prices to the table depending on payment method
  const strihaniCash = () => {
    const newValue = props.prices[0];
    const updatedData = [...tableData, newValue];

    setTableData(updatedData);
    console.log(updatedData);
  };

  const strihaniCard = () => {
    const newValue = props.prices[0];
    const updatedDataCard = [...tableDataCard, newValue];
    setTableDataCard(updatedDataCard);
    console.log(updatedDataCard);
  };

  const vousyCash = () => {
    const newValue = props.prices[1];
    const updatedData = [...tableData, newValue];
    setTableData(updatedData);
    console.log(updatedData);
  };

  const vousyCard = () => {
    const newValue = props.prices[1];
    const updatedDataCard = [...tableDataCard, newValue];
    setTableDataCard(updatedDataCard);
    console.log(updatedDataCard);
  };

  const strojekCash = () => {
    const newValue = props.prices[2];
    const updatedData = [...tableData, newValue];
    setTableData(updatedData);
    console.log(updatedData);
  };

  const strojekCard = () => {
    const newValue = props.prices[2];
    const updatedDataCard = [...tableDataCard, newValue];
    setTableDataCard(updatedDataCard);
    console.log(updatedDataCard);
  };

  const strihVousyCash = () => {
    const newValue = props.prices[3];
    const updatedData = [...tableData, newValue];
    setTableData(updatedData);
    console.log(updatedData);
  };

  const strihVousyCard = () => {
    const newValue = props.prices[3];
    const updatedDataCard = [...tableDataCard, newValue];
    setTableDataCard(updatedDataCard);
    console.log(updatedDataCard);
  };

  const strihStrojekVousyCash = () => {
    const newValue = props.prices[4];
    const updatedData = [...tableData, newValue];
    setTableData(updatedData);
    console.log(updatedData);
  };

  const strihStrojekVousyCard = () => {
    const newValue = props.prices[4];
    const updatedDataCard = [...tableDataCard, newValue];
    setTableDataCard(updatedDataCard);
    console.log(updatedDataCard);
  };

  const tradicniHoleniCash = () => {
    const newValue = props.prices[5];
    const updatedData = [...tableData, newValue];
    setTableData(updatedData);
    console.log(updatedData);
  };

  const tradicniHoleniCard = () => {
    const newValue = props.prices[5];
    const updatedDataCard = [...tableDataCard, newValue];
    setTableDataCard(updatedDataCard);
    console.log(updatedDataCard);
  };

  return (
    <div className="md:container md:mx-auto mt-16 ">
      <h1 className="text-2xl font-bold p-3 text-left border border-black">{props.barbers}</h1>
      <div className="border-b-2 border-black mb-24 ">
        <ul className="md:flex flex-wrap justify-left">
          <li className="p-3">
            <button
              onClick={serviceOneHandler}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded active:bg-blue-700"
            >
              {props.services[0]}
            </button>
          </li>
          <li className="p-3">
            <button
              onClick={serviceTwoHandler}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded active:bg-blue-700"
            >
              {props.services[1]}
            </button>
          </li>
          <li className="p-3">
            <button
              onClick={serviceThreeHandler}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded active:bg-blue-700"
            >
              {props.services[2]}
            </button>
          </li>
          <li className="p-3">
            <button
              onClick={serviceFourHandler}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded active:bg-blue-700"
            >
              {props.services[3]}
            </button>
          </li>
          <li className="p-3">
            <button
              onClick={serviceFiveHandler}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded active:bg-blue-700"
            >
              {props.services[4]}
            </button>
          </li>
          <li className="p-3">
            <button
              onClick={serviceSixHandler}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded active:bg-blue-700"
            >
              {props.services[5]}
            </button>
          </li>
        </ul>
      </div>

      {isVisibleFirst && (
        <Payment
          checkIfClicked={handleClick}
          addValueToTable={strihaniCash}
          addValueToTableCard={strihaniCard}
          paymentId={PAYMENT_ID[0]}
        />
      )}
      {isVisibleSecond && (
        <Payment
          checkIfClicked={handleClick}
          addValueToTable={vousyCash}
          addValueToTableCard={vousyCard}
          paymentId={PAYMENT_ID[1]}
        />
      )}
      {isVisibleThird && (
        <Payment
          checkIfClicked={handleClick}
          addValueToTable={strojekCash}
          addValueToTableCard={strojekCard}
          paymentId={PAYMENT_ID[2]}
        />
      )}
      {isVisibleFourth && (
        <Payment
          checkIfClicked={handleClick}
          addValueToTable={strihVousyCash}
          addValueToTableCard={strihVousyCard}
          paymentId={PAYMENT_ID[3]}
        />
      )}
      {isVisibleFifth && (
        <Payment
          checkIfClicked={handleClick}
          addValueToTable={strihStrojekVousyCash}
          addValueToTableCard={strihStrojekVousyCard}
          paymentId={PAYMENT_ID[4]}
        />
      )}
      {isVisibleSixth && (
        <Payment
          checkIfClicked={handleClick}
          addValueToTable={tradicniHoleniCash}
          addValueToTableCard={tradicniHoleniCard}
          paymentId={PAYMENT_ID[5]}
        />
      )}

      <Table
        prices={props.prices}
        passTableData={tableData}
        passTableDataCard={tableDataCard}
        buttonClickCheck={clickedButton}
        setTableData={setTableData}
        setTableDataCard={setTableDataCard}
      />
    </div>
  );
};

export default Person;
