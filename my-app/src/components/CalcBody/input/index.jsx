import React from "react";

import "./index.css";

export class InputCalc extends React.Component {
  render() {
    return (<div className="calc-input">{this.props.inputValue}</div>);
  }
}

