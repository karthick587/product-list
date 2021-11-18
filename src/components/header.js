import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom"
import React, { useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import Avatar from '@mui/material/Avatar';



function Header(props) {
  let history = useHistory();
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
       <LoadingBar color="#f11946" ref={ref} />
    <div className="top">
      <div className="container topnav">
        <div className="nav1"><h4>{props.pagename}</h4></div>
        <div className="nav2"> <FontAwesomeIcon icon={faMoneyBillAlt} /><h4>Cash In/Out</h4></div>
        <div className="nav3"><FontAwesomeIcon icon={faTicketAlt} /><h4>Orders</h4></div>
        <div className="nav4">  
          <form class="d-flex">
                 <input class="form-control " type="search" placeholder="Search Products" aria-label="Search" />
                 <button class="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
          </form>
        </div>
        <div className="nav5"><div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> karthick vj
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#" onClick={() => { history.push('/addproduct');}}>Add product</a></li>
    
  </ul>
</div></div>
        <div className=" nav6"></div>
        <div className="nav7">{props.pagelink}</div>
        </div>
    </div>
    
   

    
    </div>
  );
}

export default Header;
