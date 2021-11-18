import logo2 from './logo2.svg';
import './headermain.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Pos from '../pos';

import { Link, withRouter } from "react-router-dom";
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'



function Headermain() {
  
  const [progress, setProgress] = useState(0)
    
   
  return (
    <div>
  
    <div className="nav-top">
  <div className="container">
  <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo2} alt="Logo2" /></a>
    <div class="dropicon drop">
          <a class="droptext" href="#">
          <FontAwesomeIcon icon={faShoppingCart} />
          <sup class="my_cart_quantity badge badge-primary" >0</sup>
          </a>
          <div class="dropcontent">
    <h4 >My cart</h4>
    <a > <h5>
          Your cart is empty!
        </h5></a>
    
  </div>
        </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
                <a class="nav-link" > home
                </a>
              </li>
              <li class="nav-item">
                <a  class="nav-link">
                  sales
                </a>
              </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Form</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Appointment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
        <li class="nav-item dropicon">
          <a class="nav-link droptext" href="#">
          <FontAwesomeIcon icon={faShoppingCart} />
          <sup class="my_cart_quantity badge badge-primary" >0</sup>
          </a>
          <div class="dropcontent">
    <h4 >My cart</h4>
    <a > <h5>
          Your cart is empty!
        </h5></a>
    
  </div>
        </li>
      </ul>
      <div class="sign">
      <div class="nav-item ">
          <a class="nav-link " >
            Sign in
          </a>
        </div>
        <button class="btn btn-outline-success" > Contact us</button>
      </div>
    </div>
  </div>
</nav>
  </div>
    
  
    
    </div>
    </div>
  );
}

export default Headermain;
