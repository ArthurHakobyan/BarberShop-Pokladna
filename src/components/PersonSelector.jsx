import React from "react";

const PersonSelector = (props) => {
  return (
    <div className="border md:flex">
      <h1 className="m-6 font-bold">Vybrat Holice</h1>
      <button
        onClick={props.onClickFirst}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded m-3 active:bg-green-800"
      >
        {props.barbers[0]}
      </button>
      <button
        onClick={props.onClickSecond}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded m-3 active:bg-green-800"
      >
        {props.barbers[1]}
      </button>
      <button
        onClick={props.onClickThird}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded m-3 active:bg-green-800"
      >
        {props.barbers[2]}
      </button>
      <button
        onClick={props.onClickFourth}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded m-3 active:bg-green-800"
      >
        {props.barbers[3]}
      </button>
    </div>
  );
};

export default PersonSelector;
