import { Component } from "react";
import { Button } from "./components/Button/Button";

export class App extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  updateMessage = (state) =>
    this.setState({ message: new Date().toLocaleTimeString() });
  render() {
    const label = this.state.message;
    return (
      <>
        <Button label="Button" changeMessage={this.updateMessage} />
        <span>{label}</span>
      </>
    );
  }
}
