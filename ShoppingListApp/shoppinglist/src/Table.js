import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends React.Component {
  render() {
    const { characterData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody characterBody={characterData} />
      </table>
    );
  }
}

export default Table;
