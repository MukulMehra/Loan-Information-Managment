import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from './images/user.png';
import Password from './images/password.png';
const initial = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: "",
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
    let usernameError = "";
    let passwordError = "";

    if (!this.state.username) {
      usernameError = "Username Cannot Be Blank";
    }
    if (!this.state.password) {
      passwordError = "Password Cannot Be Blank";
    }
    if (usernameError || passwordError) {
      this.setState({ usernameError, passwordError });
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
              <h1>SignIn</h1>
              <hr></hr>
              <img src={Logo} className="logo" alt="Logo" />
              <input
                name="family"
                type="text"
                className="forlogo"
                placeholder="Enter Your Email or Number"
                value={this.state.family}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.usernameError}</div>
              <img src={Password} className="logo" alt="Logo" />
              <input
                name="cast"
                type="Password"
                className="forlogo"
                placeholder="Enter Your Password"
                value={this.state.cast}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.passwordError}</div>
              <p className="create">
                Create a Account <Link to="/signup">SignUp</Link>
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
