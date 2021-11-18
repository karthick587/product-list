import './foodtab.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'




import food1 from './img/food1.jpg'
import food2 from './img/food2.jpg'
import food3 from './img/food3.jpg'
import food4 from './img/food4.jpg'
import food5 from './img/food5.png'
import food6 from './img/food6.jpg'
import food7 from './img/food7.jpg'

function Foodtab() {
  return (
    <div>
   <div class="container">
  <div class="row row-cols-auto">
    <div class="col">
        <article className="productlist">
<div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={food1} alt="image4" />
<span class="price-tag">$ 9.40</span>
</div>
<div class="product-name">Bacon Burger</div>
        </article>
    </div>
    <div class="col">
 <article className="productlist">
 <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={food2} alt="chair2" />
<span class="price-tag">$ 4.40</span>
</div>
<div class="product-name">Cheese Burger</div>
</article>
    </div>
    <div class="col">
    <article className="productlist">
    <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={food3} alt="chair1" />
<span class="price-tag">$ 6.40</span>
</div>
<div class="product-name">Chicken Curry Sandwich</div>
</article>
    </div>
    <div class="col">
    <article className="productlist">
    <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={food4} alt="chair1" />
<span class="price-tag">$ 3.40</span>
</div>
<div class="product-name">Club Sandwich</div>
</article>
    </div>
    <div class="col">
        <article className="productlist">
<div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={food5} alt="food5" />
<span class="price-tag">$ 2.40</span>
</div>
<div class="product-name">Funghi</div>
        </article>
    </div>
    <div class="col">
 <article className="productlist">
 <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={food6} alt="food6" />
<span class="price-tag">$ 4.40</span>
</div>
<div class="product-name">Lunch Maki 18pc</div>
</article>
    </div>
    <div class="col">
    <article className="productlist">
    <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={food7} alt="food7" />
<span class="price-tag">$ 3.40</span>
</div>
<div class="product-name">Mozzarella Sandwich</div>
</article>
    </div>
    <div class="col">
    <article className="productlist">
    <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={food5} alt="food8" />
<span class="price-tag">$ 5.40</span>
</div>
<div class="product-name">Pasta 4 formaggi </div>
</article>
    </div>
  </div>
</div>
        </div>
  );
}

export default Foodtab;