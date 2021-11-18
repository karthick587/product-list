import './index.css';
import Login from './components/login';
import Pos from './pos';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React, { useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import Addproduct from './addproduct';
function App() {
    const ref = useRef(null);

    function handleLoadSomething() {
          ref.current.continuousStart();
          setTimeout(() => {
              console.log("...loading something");
              ref.current.complete();
          }, 1000);
      }

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

