import './drinkstab.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'




import drink1 from './img/drink1.jpg'
import drink2 from './img/drink2.jpg'
import drink3 from './img/drink3.jpg'




function Drinkstab() {
  return (
    <div>
   <div class="container">
  <div class="row row-cols-auto">
    
    <div class="col">
 <article className="productlist">
 <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={drink1} alt="drink1" />
<span class="price-tag">$ 39.40</span>
</div>
<div class="product-name"> coco cola</div>
</article>
    </div>
    <div class="col">
    <article className="productlist">
    <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={drink2} alt="table2" />
<span class="price-tag">$ 56.40</span>
</div>
<div class="product-name">bovanto</div>
</article>
    </div>
    <div class="col">
    <article className="productlist">
    <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={drink3} alt="drink3" />
<span class="price-tag">$ 26.40</span>
</div>
<div class="product-name">mineral whater</div>
</article>
    </div>
  
  </div>
</div>
        </div>
  );
}

export default Drinkstab;