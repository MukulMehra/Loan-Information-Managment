import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import "./payment.css";
import CardImg from "./card.svg";
import Arrow from "./arrow.svg";

class payment extends Component {
  render() {
    return (
      <Container fluid className="cont">
        <Row>
          <Col md={12}>
            <img src={CardImg} alt="payment" className="payimg" />
            <img src={Arrow} alt="payment" className="aricon" />
            <img
              className="usicon"
              src="https://img.icons8.com/cotton/50/000000/user-male--v4.png"
            />
            <img
              className="appicon"
              src="https://img.icons8.com/ios/50/000000/note.png"
            />
            <img
              className="phicon"
              src="https://img.icons8.com/ios/50/000000/phone.png"
            />
            <div className="cont1">
              <h2 className="payhead">EMI Payment</h2>
              <input className="entry" type="text" placeholder="Name" />
              <input
                className="entry"
                type="text"
                placeholder="Application ID"
              />
              <input className="entry" type="text" placeholder="Phone no." />
              <Button className="paybut" variant="primary">
                Payment
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default payment;
