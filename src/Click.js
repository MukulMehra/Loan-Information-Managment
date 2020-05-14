import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
import Loan from './loan';
import App from './App';
import Detail from './detail';

function Click() {
    return(
       <Router>
           <Switch>
               <Route path="/" exact component={App} />
               <Route path="/loan" component={Loan} />
               <Route path="/detail" component={Detail} />
           </Switch>
       </Router>
    );
}

export default Click;