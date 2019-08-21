import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends React.Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody
          characterBody={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
