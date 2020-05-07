import React from "react";

class Dialog extends React.Component {
  actionClass(key) {
    const action = "dialogBox";

    switch (key) {
      case "top":
        return action + "Top";
      case "right":
        return action + "Right";
      case "bottom":
        return action + "Bottom";
      case "left":
        return action + "Left";
      default:
        return action + "Bottom";
    }
  }

  render() {
    return (
      <div className={this.actionClass(this.props.position)}>
        Stay Safe, Take Care
      </div>
    );
  }
}

export default Dialog;
