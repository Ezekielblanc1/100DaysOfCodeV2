import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
class App extends React.Component {
  state = {
    characters: []
  };
  render() {
    // const characters = [
    //   {
    //     name: "Charlie",
    //     job: "Janitor"
    //   },
    //   {
    //     name: "Mac",
    //     job: "Bouncer"
    //   },
    //   {
    //     name: "Dee",
    //     job: "Aspring actress"
    //   },
    //   {
    //     name: "Dennis",
    //     job: "Bartender"
    //   }
    // ];
    return (
      <div className="App">
        {/* <h1>Hello world</h1> */}
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
