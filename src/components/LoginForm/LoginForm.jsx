// import PropTypes from "prop-types";
import { Component } from "react";
import { Container } from "./LoginForm.styled";

const INITIAL_STATE = {
  login: "",
  password: "",
  email: "",
};

export class LoginForm extends Component {
  state = INITIAL_STATE;
  handleOnChange = (e) => {
    const {name, value} = e.target;
    this.setState({ [name]: value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(`Signed up as ${this.state.login}`);
    this.props.onSubmit({ ...this.state });
    this.resetForm();
  };

resetForm = () => {
this.setState(INITIAL_STATE);
}
  render() {
    const { login, password, email } = this.state;
    return (
      <Container onSubmit={this.handleOnSubmit}>
        <label>
          Name
          <input
            type="text"
            name="login"
            value={login}
            placeholder="
            Enter login"
            onChange={this.handleOnChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={password}
            placeholder="
            Enter password"
            onChange={this.handleOnChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            placeholder="
            Enter email"
            onChange={this.handleOnChange}
          />
        </label>
        <button type="submit">Submit as {login}</button>
      </Container>
    );
  }
}

// LoginForm.propTypes = {
//     onSubmit: PropTypes.exact({
//         login: PropTypes.string.isRequired,
//         password: PropTypes.string.isRequired,
//     }).isRequired,
// }
