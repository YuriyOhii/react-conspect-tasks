import { Component } from "react";

export class Counter extends Component {
  state = {
    value: this.props.innitialValue,
  };

  static defaultProps = {
    step: 1,
    innitialValue: 39,
  };

  handleIncrement = (e) => {
    this.setState((state) => ({
      value: state.value + this.props.step,
    }));
  };

  handleDecrement = (e) => {
    this.setState((state) => ({
      value: state.value - this.props.step,
    }));
  };

  render() {
    const { step } = this.props;
    return (
      <>
        <span>{this.state.value}</span>
        <button
          type="button"
          onClick={this.handleIncrement}
        >{`Increment by ${step}`}</button>
        <button
          type="button"
          onClick={this.handleDecrement}
        >{`Decrement by ${step}`}</button>
      </>
    );
  }
}
