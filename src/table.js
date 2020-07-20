import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
class App extends Component {
  render() {
    function selectOnlyThis(id) {
      var myCheckbox = document.getElementsByName("myCheckbox");
      Array.prototype.forEach.call(myCheckbox, function (el) {
        el.checked = false;
      });
      id.checked = true;
    }
    return (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Application ID</th>
                  <th>Name</th>
                  <th>State</th>
                  <th style={{ color: "green" }}>Approve</th>
                  <th style={{ color: "yellow" }}>Pending</th>
                  <th style={{ color: "red" }}>Reject</th>
                  <th>Loan Amount</th>
                  <th>Document</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1583528832</td>
                  <td>Mukul</td>
                  <td>Rajasthan, Udaipur</td>
                  <td>
                    <input
                      type="checkbox"
                      name="myCheckbox"
                      value="1"
                      onclick={selectOnlyThis(this)}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="myCheckbox"
                      value="2"
                      onclick={selectOnlyThis(this)}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      name="myCheckbox"
                      value="3"
                      onclick={selectOnlyThis(this)}
                    />
                  </td>
                  <td>150000</td>
                  <td>
                    <Button>Bank Receipt</Button>
                  </td>
                </tr>
                <tr>
                  <td>1583528832</td>
                  <td>Varshang</td>
                  <td>Rajasthan, Udaipur</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>100000</td>
                  <td>
                    <Button>Bank Receipt</Button>
                  </td>
                </tr>
                <tr>
                  <td>1583528832</td>
                  <td>Bharat</td>
                  <td>Rajasthan, Udaipur</td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>110000</td>
                  <td>
                    <Button>Bank Receipt</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
    );
  }
}

export default App;
