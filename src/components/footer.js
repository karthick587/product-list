
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'



function Footer() {
  return (
    <div>
   <div className="bottom">
   <div class="container">
                    <div class="row">
                        <div class="col-lg-2 pt24 pb24 ft2">
                            <h5 class="mb-3">Useful Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Products</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Legal</a></li>
                                <li><a href="/">Contact us</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-5 pt24 pb24 ft2">
                            <h5 class="mb-3">About us</h5>
                            <p>We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
                            <br/><br/>Our products are designed for small to medium size companies willing to optimize their performance.</p>
                        </div>
                        <div id="connect" class="col-lg-4 offset-lg-1 pt24 pb24 ft2">
                            <h5 class="mb-3">Connect with us</h5>
                            <ul class="list-unstyled">
                                <li><FontAwesomeIcon icon={faComment} /><span><a href="/contactus">Contact us</a></span></li>
                                <li><FontAwesomeIcon icon={faEnvelope} /><span><a href="mailto:info@yourcompany.example.com">info@yourcompany.example.com</a></span></li>
                                <li><FontAwesomeIcon icon={faPhoneAlt} /><span class="o_force_ltr"><a href="tel:+1 (650) 555-0111">+1 (650) 555-0111</a></span></li>
                            </ul>
                            <div className="soc">
                               
                            </div>
                        </div>
                    </div>
         </div>
      
         </div>
         <div class="o_footer_copyright o_colored_level o_cc" data-name="Copyright">
                        <div class="container py-3">
                            <div class="row">
                                <div class="col-sm text-center text-sm-left text-muted">
                                    <span class="o_footer_copyright_name mr-2" data-oe-id="1991" data-oe-xpath="/data/xpath/span" data-oe-model="ir.ui.view" data-oe-field="arch">Copyright © Company name</span>
      
                                </div>
                            </div>
                        </div>
          </div>
        </div>
  );
}

export default Footer;
