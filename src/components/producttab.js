import './producttab.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';


import Chairtab from './chairtab';
import Desk from './desk';
import Drinkstab from './drinkstab';
import React, { useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import Foodtab from './foodtab';

function Producttab() {
  const ref = useRef(null);

  function handleLoadSomething() {
        ref.current.continuousStart();
        setTimeout(() => {
            console.log("...loading something");
            ref.current.complete();
        }, 700);
    }

  return (
    <div>
      
   <div className="products">
   <LoadingBar color="#35979c" ref={ref} />
   <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={handleLoadSomething}>Chair</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={handleLoadSomething}>Desk</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-3" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={handleLoadSomething}>Drinks</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={handleLoadSomething}>Food</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-5" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={handleLoadSomething}>Miscellaneous</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-home-tab"><Chairtab /></div>
  <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-profile-tab"> <Desk /></div>
  <div class="tab-pane fade" id="pills-3" role="tabpanel" aria-labelledby="pills-contact-tab"> <Drinkstab /></div>
  <div class="tab-pane fade" id="pills-4" role="tabpanel" aria-labelledby="pills-profile-tab"><Foodtab /></div>
  <div class="tab-pane fade" id="pills-5" role="tabpanel" aria-labelledby="pills-contact-tab">
      truck

 </div>
</div>

</div>


   </div>
  
   
  );
}

export default Producttab;