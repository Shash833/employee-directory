import React from "react";

function TableData(props) {
  return (
    <tr>
      <td> {props.id}</td>
      <td> {props.name}</td>
      <td>{props.occupation}</td>
    </tr>
  );
}

export default TableData;
