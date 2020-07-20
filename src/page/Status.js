import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Stepper from "./stepper";
import "./Status.css";

class Status extends Component {
  render() {
    return (
      <Container fluid className="head">
        <Row>
          <Col md={12}>
            <div className="box1">
              <b className="text">Mukul Mehra</b>
              <p className="text">
                Savina Shiv Society House no.7 Udaipur, Rajasthan Udaipur -
                313001
              </p>
              <b className="text">Phone Number</b>
              <text className="no">8029839028</text>
              <b className="sidetext">More actions</b>
              <img
                className="icon"
                src="https://img.icons8.com/color/48/000000/note.png"
              />
              <text className="sidetext1">Download invoice</text>
              <Button className="but" variant="outline-primary">
                Download
              </Button>{" "}
            </div>
            <div className="box2">
              <b className="text2">Loan status</b>
              <Stepper></Stepper>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Status;
