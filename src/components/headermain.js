import logo2 from './logo2.svg';
import './headermain.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



import React from 'react'




function Headermain() {
  
  
    
   
  return (
    <div>
  
    <div className="nav-top">
  <div className="container">
  <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/logo"><img src={logo2} alt="Logo2" /></a>
    <div class="dropicon drop">
          <a class="droptext" href="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <sup class="my_cart_quantity badge badge-primary" >0</sup>
          </a>
          <div class="dropcontent">
    <h4 >My cart</h4>
     <h5>
          Your cart is empty!
        </h5>
    
  </div>
        </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
                <a class="nav-link" href="/home" > home
                </a>
              </li>
              <li class="nav-item">
                <a href="/home"  class="nav-link">
                  sales
                </a>
              </li>
        <li class="nav-item">
          <a class="nav-link" href="/home" >Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"href="/home" >Form</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/home" >Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/home" >Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/home" >Appointment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/home" >Contact us</a>
        </li>
        <li class="nav-item dropicon">
          <a class="nav-link droptext" href="/home" >
          <FontAwesomeIcon icon={faShoppingCart} />
          <sup class="my_cart_quantity badge badge-primary" >0</sup>
          </a>
          <div class="dropcontent">
    <h4 >My cart</h4>
   <h5>
          Your cart is empty!
        </h5>
    
  </div>
        </li>
      </ul>
      <div class="sign">
      <div class="nav-item ">
          <a href="/home"  class="nav-link " >
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
