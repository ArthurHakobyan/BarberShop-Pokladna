import React from "react";

const Table = (props) => {
  let renderedList;

  if (props.buttonClickCheck === "button1") {
    renderedList = props.passTableData.map((value, index) => (
      <tr key={index}>
        <td>{value}</td>
        <td>{null}</td>
      </tr>
    ));
  } else {
    renderedList = props.passTableDataCard.map((value, index) => (
      <tr key={index}>
        <td>{null}</td>
        <td>{value}</td>
      </tr>
    ));
  }

  const handleDelete = () => {
    const updatedList = [...props.passTableData];
    updatedList.pop();
    props.setTableData(updatedList);
    console.log(updatedList);
  };

  const handleDeleteCard = () => {
    const updatedList = [...props.passTableDataCard];
    updatedList.pop();
    props.setTableDataCard(updatedList);
    console.log(updatedList);
  };

  return (
    <div>
      <table className=" my-3" id="table">
        <thead>
          <tr>
            <th
              className="border-b border-dotted  border-indigo-600 px-3"
              scope="col"
            >
              Hotove
            </th>
            <th
              className="border-b border-dotted border-indigo-600 px-3"
              scope="col"
            >
              Kartou
            </th>
          </tr>
        </thead>
        <tbody>{renderedList}</tbody>
      </table>

      <div className="border-t-2 border-black mb-28">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded m-3 active:bg-red-800"
        >
          Smazat Hotovost
        </button>
        <button
          onClick={handleDeleteCard}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded m-3 active:bg-red-800"
        >
          Smazat Kartou
        </button>
      </div>
    </div>
  );
};

export default Table;
