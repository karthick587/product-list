
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import 'bootstrap/dist/js/bootstrap.bundle.min';


import Headermain from './headermain';
import Footer from './footer';
import { useHistory } from "react-router-dom"

import React, { useRef } from "react";
import LoadingBar from "react-top-loading-bar";

function Login() {
   

    let history = useHistory();
   
    const ref = useRef(null);

  function handleLoadSomething() {
        ref.current.continuousStart();
        setTimeout(() => {
            console.log("...loading something");
            ref.current.complete();
        }, 500);
    }

  return (
    <div>
      <LoadingBar color="#35979c" ref={ref} />
        <Headermain />
   <div className="login-body">
   <div class="container">
            <form class="oe_login_form" role="form" method="post"  >
                <input type="hidden" name="csrf_token" data-oe-model="ir.ui.view" data-oe-id="190" data-oe-field="arch" />
                <div class="form-group field-login">
                    <label for="login" data-oe-model="ir.ui.view"  data-oe-field="arch" >Email</label>
                    <input type="text" placeholder="Email" name="login" id="login" required="required" autofocus="autofocus" autocapitalize="off" data-oe-model="ir.ui.view" data-oe-id="190" data-oe-field="arch"  class="form-control " />
                </div>
                <div class="form-group field-password">
                    <label for="password" data-oe-model="ir.ui.view" data-oe-id="190" data-oe-field="arch">Password</label>
                    <input type="password" placeholder="Password" name="password" id="password" required="required" autocomplete="current-password" maxlength="4096" data-oe-model="ir.ui.view" data-oe-field="arch"  class="form-control " />
                </div>
                <div class="clearfix oe_login_buttons text-center mb-1 pt-3">
                    <button  class="btn btn-primary btn-block"   onClick={() => { history.push('/pos');}} ><a >Log in</a></button>
                <div class="justify-content-between mt-2 d-flex small">
                    <a data-oe-model="ir.ui.view" data-oe-id="381" data-oe-field="arch" >Reset Password</a>
                </div>
                    <div class="o_login_auth" data-oe-model="ir.ui.view" data-oe-id="190" data-oe-field="arch" ></div>
                </div>
                <input type="hidden" name="redirect" data-oe-model="ir.ui.view" data-oe-id="190" data-oe-field="arch"  />
            </form>
        </div>
   </div>
        
   <Footer />

    
    </div>
  );
}

export default Login;
