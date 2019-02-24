import React from "react";

import "./index.css";

export class ButtonCalc extends React.Component {
  render() {
    return (
      <input
        type="button"
        onClick={this.props.onClick}
        className="calc-button"
        value={this.props.value}
      />
    );
  }
}
