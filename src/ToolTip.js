import React from "react";
import Dialog from "./Dialog";

class ToolTip extends React.Component {
  constructor() {
    super();

    this.state = {
      showDialog: false,
    };
  }

  handleDialogBox = () => {
    this.setState({
      showDialog: !this.state.showDialog,
    });
  };
  render() {
    return (
      <div className="container">
        <button
          className="btn"
          onMouseOver={this.handleDialogBox}
          onMouseOut={this.handleDialogBox}
        >
          Click Me
        </button>
        {this.state.showDialog && <Dialog position={this.props.pos} />}
      </div>
    );
  }
}

export default ToolTip;
