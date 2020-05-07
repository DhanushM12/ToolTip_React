import React from "react";

class App extends React.Component {
  constructor() {
    super(); //calling the super constructor that is React.Component
    this.state = {
      input: "",
    };
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello Tooltip</h1>
        <h2>Enter your input</h2>
        <label>Click here to Enter</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInput}
        />
        <ToolTip pos={this.state.input} />
      </div>
    );
  }
}

export default App;
