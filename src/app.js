import './index.css';
import Login from './components/login';
import Pos from './pos';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React from "react";

import Addproduct from './addproduct';
function App() {
    

   

    return (
        <div>
       <div>hello</div>
    <Router>
       
         <Switch>
   <Route  exact path="/" component={Login} />
   <Route  exact path="/pos" component={Pos} />
   <Route  exact path="/addproduct" component={Addproduct} />
    </Switch>
    </Router>
    </div>
    );
}

export default App;

