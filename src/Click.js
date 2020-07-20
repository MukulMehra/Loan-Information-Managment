import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Loan from "./loan";
import App from "./App";
import Detail from "./detail";
import SignIn from "./signin";
import SignUp from "./signup";
import Table from "./table";
import Boot from "./boot";
import Status from "./page/Status";
import Payment from "./page/Payment";
import Card from "./Card/Card";
import Admin from "./Admin/RepayAdmin";

function Click() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/loan" component={Loan} />
        <Route path="/detail" component={Detail} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/table" component={Table} />
        <Route path="/boot" component={Boot} />
        <Route path="/status" component={Status} />
        <Route path="/payment" component={Payment} />
        <Route path="/card" component={Card} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default Click;
