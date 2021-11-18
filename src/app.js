import './index.css';
import Login from './components/login';
import Pos from './pos';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React from "react";

import Addproduct from './addproduct';
function App() {
    

   

    return (
       
    <Router>
       
         <Switch>
   <Route  exact path="/" component={Login} />
   <Route  exact path="/pos" component={Pos} />
   <Route  exact path="/addproduct" component={Addproduct} />
    </Switch>
    </Router>
    );
}

export default App;

