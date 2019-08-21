import React from "react";

const TableBody = props => {
  const rows = props.characterBody.map((char, i) => {
    return (
      <tr key={i}>
        <td>{char.name}</td>
        <td>{char.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(i)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default TableBody;
