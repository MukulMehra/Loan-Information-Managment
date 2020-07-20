import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Car from "./images/car.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class boot extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar bg="" expand="lg" className="navbar">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        <Row>
          <Col className="bg">
            <div className="carimg">
              <img src={Car} alt="Car" className="car"></img>
            </div>
            <div className="division">
              <h1>Login</h1>
              <br></br>
              <div className="align">
                <div className="input1">
                  <div className="input">
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="text" placeholder="Enter Your Name" />
                    <button className="but">Login</button>
                  </div>
                  </div>
                </div>
              </div>
          </Col>
        </Row>
        <Row>
          <Col className="bg1">
            <div></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default boot;
