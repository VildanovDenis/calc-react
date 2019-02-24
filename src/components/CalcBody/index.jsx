import React from "react";

import { InputCalc } from "./input";
import { ButtonCalc } from "./button";
import { calcNumButtons } from "./enum";
import { calcOpTopButtons } from "./enum";
import { calcOpRightButtons } from "./enum";
import { mathEval } from "./mathEval";

import "./index.css";

export class CalcBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previousInputValue: "",
      inputValue: "",
      operator: ""
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  /**
   * Обрабатывает клик на кнопке для того, чтобы определить какую операцию выполнять.
   */
  onButtonClick(e) {
    switch (e.target.value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".": {
        const inputValue = `${this.state.inputValue}${e.target.value}`;
        this.setState({ inputValue });
        return;
      }
      case "+":
      case "-":
      case "/":
      case "*": {
        const operator = e.target.value;
        const { inputValue: previousInputValue } = this.state;

        this.setState({
          previousInputValue,
          inputValue: "",
          operator
        });
        return;
      }
      case "C": {
        if (this.state.previousInputValue !== "") {
          this.setState({ inputValue: "" });
        }
        return;
      }
      case "CE": {
        this.setState({
          inputValue: "",
          previousInputValue: "",
          operator: null
        });
        return;
      }
      case "=": {
        if (this.operator === null) {
          this.setState({ inputValue: "0" });
        }
        this.setState({
          inputValue: mathEval(
            this.state.previousInputValue,
            this.state.inputValue,
            this.state.operator
          ),
          previousInputValue: "",
          operator: null
        });
        return;
      }
      default: {
        throw new Error("Невозможно обработать операцию.");
      }
    }
  }

  render() {
    return (
      <div className="calculator">
        <InputCalc inputValue={this.state.inputValue} />
        <div className="buttons-wrapper">
          <div className="buttons-wrapper__top">
            {calcOpTopButtons.map(i => {
              return (
                <ButtonCalc key={i} onClick={this.onButtonClick} value={i} />
              );
            })}
          </div>
          <div className="buttons-wrapper__left">
            {calcNumButtons.map(i => {
              return (
                <ButtonCalc key={i} onClick={this.onButtonClick} value={i} />
              );
            })}
          </div>
          <div className="buttons-wrapper__right">
            {calcOpRightButtons.map(i => {
              return (
                <ButtonCalc key={i} onClick={this.onButtonClick} value={i} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
