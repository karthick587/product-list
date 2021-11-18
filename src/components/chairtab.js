import './chairtab.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'




import image4 from './img/image4.jpg'
import chair1 from './img/chair1.png'
import chair2 from './img/chair2.png'
import chair3 from './img/chair3.png'
function Chairtab() {
  return (
    <div>
   <div class="container">
  <div class="row row-cols-auto">
    <div class="col">
        <article className="productlist">
<div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={image4} alt="image4" />
<span class="price-tag">$ 39.40</span>
</div>
<div class="product-name">Conference Chair (Aluminium)</div>
        </article>
    </div>
    <div class="col">
 <article className="productlist">
 <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={chair2} alt="chair2" />
<span class="price-tag">$ 49.40</span>
</div>
<div class="product-name">Conference Chair (Aluminium)</div>
</article>
    </div>
    <div class="col">
    <article className="productlist">
    <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={chair1} alt="chair1" />
<span class="price-tag">$ 69.40</span>
</div>
<div class="product-name">Conference Chair (Aluminium)</div>
</article>
    </div>
    <div class="col">
    <article className="productlist">
    <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={chair1} alt="chair1" />
<span class="price-tag">$ 79.40</span>
</div>
<div class="product-name">Conference Chair (Aluminium)</div>
</article>
    </div>
  </div>
</div>
        </div>
  );
}

export default Chairtab;