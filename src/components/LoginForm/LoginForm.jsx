// import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Component } from "react";
import { Container } from "./LoginForm.styled";

const INITIAL_STATE = {
  login: "",
  password: "",
  email: "",
  agreed: false,
  gender: null,
  age: "",
};

export class LoginForm extends Component {
  loginId = nanoid();
  passwordId = nanoid();
  emailId = nanoid();
  checkBoxId = nanoid();
  maleGenderId = nanoid();
  femaleGenderId = nanoid();
  ageSelectId = nanoid();

  state = INITIAL_STATE;

  handleOnChange = (e) => {
    const { name, value, checked, type } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
    console.log(value, name);
  };

  handleGenderOnChange = (e) => {
    const { value } = e.target;
    this.setState({ gender: value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(`Signed up as ${this.state.login}`);
    this.props.onSubmit({ ...this.state });
    this.resetForm();
  };

  handleOnChangeAge = (e) => {
    console.log(e);
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };
  render() {
    const { login, password, email, agreed, gender, age } = this.state;
    return (
      <Container onSubmit={this.handleOnSubmit}>
        <label htmlFor={this.loginId}>
          Name
          <input
            id={this.loginId}
            type="text"
            name="login"
            value={login}
            placeholder="
            Enter login"
            onChange={this.handleOnChange}
          />
        </label>
        <label htmlFor={this.passwordId}>
          Password
          <input
            id={this.passwordId}
            type="text"
            name="password"
            value={password}
            placeholder="
            Enter password"
            onChange={this.handleOnChange}
          />
        </label>
        <label htmlFor={this.emailId}>
          Email
          <input
            id={this.emailId}
            type="email"
            name="email"
            value={email}
            placeholder="
            Enter email"
            onChange={this.handleOnChange}
          />
        </label>
        <label htmlFor={this.checkBoxId}>
          <input
            id={this.checkBoxId}
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleOnChange}
          />
          I wholly understand what i'm doing!
        </label>
        <section>
          <h3>Choose your gender!</h3>
          <label htmlFor={this.maleGenderId}>
            Male
            <input
              id={this.maleGenderId}
              value="male"
              type="radio"
              name="gender"
              checked={gender === "male"}
              onChange={this.handleGenderOnChange}
            />
          </label>
          <label htmlFor={this.femaleGenderId}>
            Female
            <input
              id={this.femaleGenderId}
              value="female"
              type="radio"
              name="gender"
              checked={gender === "female"}
              onChange={this.handleGenderOnChange}
            />
          </label>
          <h3>Choose your age</h3>
          <label htmlFor={this.ageSelectId}>
            Limits
            <select
              name="age"
              id={this.ageSelectId}
              value={age}
              onChange={this.handleOnChange}
            >
              <option value="18-25">18-25</option>
              <option value="26-36">26-36</option>
              <option value="37+">37+</option>
            </select>
          </label>
        </section>
        <button type="submit" disabled={!agreed}>
          Submit as {login}
        </button>
      </Container>
    );
  }
}
