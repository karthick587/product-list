
import './pos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Header from './components/header';
import Producttab from './components/producttab';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faInfoCircle, faRedoAlt, faStar, faLink, faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom"
function Pos() {
  let history = useHistory();
  return (
    <div>
      
        <Header pagelink={<a onClick={() => { history.push('/');}} ><h4>Close</h4></a>} pagename="Products"/>
        
        <div class="bodytab">
  <div class="row row-cols-2 pos-tabs">
    <div class="col-4 pos-tab1">

    <div class="order-container">
      <div class="order">
        <div class="order-empty">
        <FontAwesomeIcon icon={faShoppingCart} />
          <h1>This order is empty</h1>
          </div>
          </div>
          </div>

<div className="daipad">
<div className="pad">
<div className="control-buttons">
     <div className="control-button btn">
     <FontAwesomeIcon icon={faInfoCircle} />
     <h4>info</h4>
     </div>
     <div className="control-button btn">
     <FontAwesomeIcon icon={faRedoAlt} />
     <h4>Refund</h4>
     </div>
     <div className="control-button btn">
     <FontAwesomeIcon icon={faStar} />
     <h4>Reward</h4>
     </div>
     <div className="control-button btn">
     <FontAwesomeIcon icon={faLink} />
     <h4>Quotation/Oder</h4>
     </div>
</div>
</div>
<div className="subpad">
  <div className="subpad-left">
<button className="cus btn"> <FontAwesomeIcon icon={faUser} /> customer</button>
<button className="arrov btn"> <div className="user-icon"><FontAwesomeIcon icon={faChevronRight} /></div>Payment</button>
  </div>
  <div className="subpad-right">
  <div class="numpad">
    <button class="input-button number-char btn btn1">1</button>
  <button class="input-button number-char btn btn1">2</button>
  <button class="input-button number-char btn btn1">3</button>
  <button class="mode-button selected-mode btn btn1">Qty</button>
  <br/><button class="input-button number-char btn btn1">4</button>
  <button class="input-button number-char btn btn1" >5</button>
  <button class="input-button number-char btn btn1">6</button>
  <button class="mode-button btn btn1">Disc</button><br/>
  <button class="input-button number-char btn btn1">7</button>
  <button class="input-button number-char btn btn1">8</button>
  <button class="input-button number-char btn btn1">9</button>
  <button class="mode-button btn btn1">Price</button><br/>
  <button class="input-button numpad-minus btn btn1">+/-</button>
  <button class="input-button number-char btn btn1">0</button>
  <button class="input-button number-char dot btn btn1"> . </button>
  <button class="input-button numpad-backspace btn btn1">X</button>
  </div>
  </div>
</div>
</div>
    </div>




<div class="col-8 pos-tab2">
        
        <Producttab />
        
        
       </div>
  </div>
</div>
    
   

    
    </div>
  );
}

export default Pos;