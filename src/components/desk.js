import './desk.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'




import table from './img/table.png'
import table1 from './img/table1.png'
import table2 from './img/table2.png'
import table3 from './img/table3.png'



function Desk() {
  return (
    <div>
   <div class="container">
  <div class="row row-cols-auto">
    <div class="col">
        <article className="productlist">
<div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={table} alt="table" />
<span class="price-tag">$ 59.40</span>
</div>
<div class="product-name">Corner Desk Left Sit</div>
        </article>
    </div>
    <div class="col">
 <article className="productlist">
 <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={table1} alt="table1" />
<span class="price-tag">$ 39.40</span>
</div>
<div class="product-name">Corner Desk Right Sit</div>
</article>
    </div>
    <div class="col">
    <article className="productlist">
    <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={table2} alt="table2" />
<span class="price-tag">$ 56.40</span>
</div>
<div class="product-name">Customizable Desk (Aluminium, Black)</div>
</article>
    </div>
    <div class="col">
    <article className="productlist">
    <div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={table3} alt="table3" />
<span class="price-tag">$ 26.40</span>
</div>
<div class="product-name">Customizable Desk (Aluminium, White)</div>
</article>
    </div>
    <div class="col">
        <article className="productlist">
<div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={table} alt="table" />
<span class="price-tag">$ 70.40</span>
</div>
<div class="product-name">Customizable Desk (Custom, Black)</div>
        </article>
    </div>
    <div class="col">
        <article className="productlist">
<div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={table} alt="table" />
<span class="price-tag">$ 72.40</span>
</div>
<div class="product-name">Customizable Desk (Custom, White)</div>
        </article>
    </div>
    <div class="col">
        <article className="productlist">
<div className="productimg">
<FontAwesomeIcon icon={faInfoCircle} />
<img src={table} alt="table" />
<span class="price-tag">$ 73.40</span>
</div>
<div class="product-name">Customizable Desk (Steel, Black)</div>
        </article>
    </div>
  </div>
</div>
        </div>
  );
}

export default Desk;