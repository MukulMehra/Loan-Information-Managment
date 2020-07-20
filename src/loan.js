import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const initial = {
  account: "",
  pancard: "",
  aadhaar: "",
  accountError: "",
  pancardError: "",
  aadhaarError: "",
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
    let accountError = "";
    let pancardError = "";
    let aadhaarError = "";

    if (!this.state.account) {
      accountError = "Field Cannot Be Blank";
    }
    if (!this.state.pancard) {
      pancardError = "invalid pancard";
    }
    if (!this.state.aadhaar) {
      aadhaarError = "Aadhaar Cannot Be Blank";
    }
    if ( accountError || pancardError || aadhaarError ) {
      this.setState({ accountError, pancardError, aadhaarError });
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
              <h1>Get Your Loan Report & Score Now</h1>
              <h3>With Loan analysis and monthly updates</h3>
              <hr></hr>
              <input
                name="account"
                type="text"
                placeholder="Enter Account Number"
                value={this.state.account}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.accountError}</div>
              <input
                name="pancard"
                type="text"
                placeholder="Pan Card Number"
                maxLength="10"
                value={this.state.pancard}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.pancardError}</div>
              <input
                name="aadhaar"
                type="text"
                placeholder="Aadhaar Number"
                maxLength="12"
                value={this.state.aadhaar}
                onChange={this.handlechange}
              ></input>
              <div className="error">{this.state.aadhaarError}</div>
              <button className="uploadbtn"> 3 Month Bank Receipt</button>
              <input type="file" className="upload"></input>
              <br></br>
              <Link to="./detail">
              <Button type="submit" className="Button" onClick={this.handleSubmit}>
                Submit
              </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
