import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
import Form from "./Form";
class App extends React.Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;
    // console.log(characters);
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };
  //Alternative solution
  // handleSubmit = character => {
  //   this.setState({
  //     character: this.state.characters.push(character)
  //   });
  // };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
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
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
