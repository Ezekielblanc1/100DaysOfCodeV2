import React from "react";

const TableBody = props => {
  const rows = props.characterBody.map((char, i) => {
    return (
      <tr key={i}>
        <td>{char.name}</td>
        <td>{char.job}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default TableBody;
