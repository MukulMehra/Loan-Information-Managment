import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from './images/user.png';
import Email from './images/email.png';
import Phone from './images/phone.png';
import Home from './images/browser.png';
import Password from './images/password.png';
const initial = {
  name: "",
  email: "",
  number: "",
  address: "",
  password: "",
  conformpassword: "",
  nameError: "",
  emailError: "",
  numberError: "",
  addressError: "",
  passwordError: "",
  conformpasswordError: "",
};
class App extends Component {
  state = initial;
  handlechange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let numberError = "";
    let addressError = "";
    let passwordError = "";
    let conformpasswordError = "";

    if (!this.state.name) {
      nameError = "Field Cannot Be Blank";
    }
    if (!this.state.email) {
      emailError = "Field Cannot Be Blank";
    }
    if (!this.state.number) {
      numberError = "Field Cannot Be Blank";
    }
    if (!this.state.address) {
      addressError = "Field Cannot Be Blank";
    }
    if (!this.state.password) {
      passwordError = "Field Cannot Be Blank";
    }
    if (!this.state.conformpassword) {
      conformpasswordError = "Field Cannot Be Blank";
    }
    if (
      nameError ||
      emailError ||
      numberError ||
      addressError ||
      passwordError ||
      conformpasswordError
    ) {
      this.setState({
        nameError,
        emailError,
        numberError,
        addressError,
        passwordError,
        conformpasswordError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initial);
    }
  };
  render() {
    return (
      <Container fluid className="head">
        <Row>
          <Col md={12}>
            <div className="main">
              <h1>SignUp</h1>
              <hr></hr>
              <img src={Logo} className="logo" alt="Logo" />
              <input
                name="name"
                type="text"
                className="forlogo"
                placeholder="Enter Your Name"
                value={this.state.name}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.nameError}</div>
              <img src={Email} className="logo" alt="Logo" />
              <input
                name="email"
                type="text"
                className="forlogo"
                placeholder="Enter Your Email"
                value={this.state.email}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.emailError}</div>
              <img src={Phone} className="logo" alt="Logo" />
              <input
                name="number"
                type="text"
                className="forlogo"
                placeholder="Enter Your Number"
                maxLength="12"
                value={this.state.number}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.numberError}</div>
              <img src={Home} className="logo" alt="Logo" />
              <input
                name="address"
                type="text"
                className="forlogo"
                placeholder="Enter Your Address"
                value={this.state.address}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.addressError}</div>
              <img src={Password} className="logo" alt="Logo" />
              <input
                name="password"
                type="password"
                className="forlogo"
                placeholder="Create Password"
                value={this.state.password}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.passwordError}</div>
              <img src={Password} className="logo" alt="Logo" />
              <input
                name="conformpassword"
                type="password"
                className="forlogo"
                placeholder="Conform Password"
                value={this.state.conformpassword}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.conformpasswordError}</div>
              <p className="create1">
                Already Have a Account <Link to="/signin">SignIn</Link>
              </p>
              <Button
                type="submit"
                className="Button1"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
