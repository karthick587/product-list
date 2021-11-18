import './addproduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './components/header'
import { useHistory } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH, faGlobeAmericas, faFlask, faCreditCard, faSignal ,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DialogTitle from '@mui/material/DialogTitle';
import ImageUpload from 'image-upload-react'
import Editableform from './components/editableform';
import ReactPlayer from 'react-player'
import { useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import logo2 from './components/logo2.svg';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';


import Select from 'react-select';
import Editablerentform from './components/editablerentform';




const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));








  
function  Addproduct() {
 
  const [imageSrc, setImageSrc] = useState()

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
  }
  
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    let history = useHistory();
   
    const [val, setVal] = useState('');
    const inputRef = useRef();
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      setVal(inputRef.current.value);
    }
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
      setOpen(false);
    };




   
    

  return (
    <div>
<Header pagelink={<a onClick={() => { history.push('/pos');}} href="/pos"><h4>Close</h4></a>}  pagename="Add Product"/>

<div className="container label">

<div className="top-tab">
<ul>
    <li id="border"><a href="#"> <FontAwesomeIcon icon={faGlobeAmericas} /><h5>Go TO <br/>Website</h5></a></li>
    <li><a href="/bold"><FontAwesomeIcon icon={faArrowsAltH} /><h5>In:<br/>Out:</h5></a></li>
    <li><a href="/out"><FontAwesomeIcon icon={faFlask} /><h5>0<br/>Bill of material</h5></a></li>
    <li><a href="/run"><FontAwesomeIcon icon={faCreditCard} /><h5>00.00 Units<br/>Purchased</h5></a></li>
    <li><a href="/runout"><FontAwesomeIcon icon={faSignal} /><h5>00.00 Units<br/>solid</h5></a></li>
</ul>
</div>
<div className="container">
<div className="icon-fm">
      <Checkbox {...label} icon={<StarBorderIcon />} checkedIcon={<StarIcon style ={{color: "#35979c", }} />} />
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Product Name"
       />
       <div className="upload">
       <ImageUpload
      handleImageSelect={handleImageSelect}
      imageSrc={imageSrc}
      setImageSrc={setImageSrc}
      style={{
        width: 100,
        height: 100,
        background: '#366a6d'
      }}
    />
    <h5>Add image</h5>
    </div>
    </div>
<div className="check-box">
<FormControlLabel control={<Checkbox defaultChecked  style ={{color: "#35979c", }} />} label="Can Be Solid" />
<FormControlLabel control={<Checkbox defaultChecked style ={{color: "#35979c", }} />} label="Can Be Purchased" />
<FormControlLabel control={<Checkbox defaultChecked style ={{color: "#35979c", }} />} label="Recurring" />
<FormControlLabel control={<Checkbox defaultChecked style ={{color: "#35979c", }} />} label="Can Be Rented" />

</div>
</div>



<div>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">General Information</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Attributes & Variants</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Inventory</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Accounting</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="sales-tab" data-bs-toggle="tab" data-bs-target="#sales" type="button" role="tab" aria-controls="sales" aria-selected="false">sales</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="Rental-tab" data-bs-toggle="tab" data-bs-target="#Rental" type="button" role="tab" aria-controls="Rental" aria-selected="false">Rental</button>
  </li>
</ul>


<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> 
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            <div class="container form-tab">
           <ul>
             <li>
               <h5>Product Type</h5>
                
              <select class="form-select tabform" aria-label="Default select example">
            <option selected>Consumable</option>
           <option value="1">Service</option>
            <option value="2">Shortable Product</option>
           <option value="3">Event Ticket</option>
 
           </select>
           </li>
             <li>
             <h5>Invoicing Policy</h5>
             <select class="form-select tabform" aria-label="Default select example">
             <option selected>Ordered Quantaties</option>
             <option value="1">Delivered Quantaties</option>
  
 
            </select>
              </li>
             <li>
             <h5>Unit of Measure</h5>
             <select class="form-select tabform" aria-label="Default select example">
             <option selected>kilogram</option>
             <option value="1">liter</option>
 
  
             </select>
              </li>
             <li>
             <h5>Purchase UoM</h5>
             <select class="form-select tabform" aria-label="Default select example">
             <option selected>mm</option>
             <option value="1">cm</option>
             <option value="2">g</option>
             <option value="3">kg</option>
             <option value="4">oz</option>
             <option value="5">in</option>
             <option value="6">l</option>
             </select>
            </li>
            
           </ul>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <div class="container form-tab">
           <ul>
             <li>
               <h5>Product Type</h5>
                
              <select class="form-select tabform" aria-label="Default select example">
            <option selected>Consumable</option>
           <option value="1">Service</option>
            <option value="2">Shortable Product</option>
           <option value="3">Event Ticket</option>
 
           </select>
           </li>
             <li>
             <h5>Invoicing Policy</h5>
             <select class="form-select tabform" aria-label="Default select example">
             <option selected>Ordered Quantaties</option>
             <option value="1">Delivered Quantaties</option>
  
 
            </select>
              </li>
             <li>
             <h5>Unit of Measure</h5>
             <select class="form-select tabform" aria-label="Default select example">
             <option selected>kilogram</option>
             <option value="1">liter</option>
 
  
             </select>
              </li>
             <li>
             <h5>Purchase UoM</h5>
             <select class="form-select tabform" aria-label="Default select example">
             <option selected>mm</option>
             <option value="1">cm</option>
             <option value="2">g</option>
             <option value="3">kg</option>
             <option value="4">oz</option>
             <option value="5">in</option>
             <option value="6">l</option>
             </select>
            </li>
            
           </ul>
            </div>
          </Item>
        </Grid>
        
      </Grid>
      <div className="text-ar">
      <h5>Internal Notes</h5>
      <div class="form-floating">
      
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Internal Notes</label>
</div>
</div>
    </Box>
    </div>




  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">

    <Editableform />
  </div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">

  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            <div class="container form-tab check">
           <ul>
             <p>Operations</p>
             <li>
               <h5>Product Type</h5>
               <FormControlLabel control={<Checkbox defaultChecked  style ={{color: "#35979c", }} />} label="" />
              <h5>Buy</h5>
           </li>
             <li>
             <h5>..</h5>
             <FormControlLabel control={<Checkbox defaultChecked  style ={{color: "#35979c", }} />} label="" />
             <h5>Manufacture</h5>
              </li>
             <li class="arrow">
               <h5>..</h5>
               <FontAwesomeIcon icon={faArrowRight} /><a href="/unit">Unit of Measure</a>
             
              </li>
          
            
           </ul>
           <div className="text-ar">
      <h5>Internal Notes</h5>
      <div class="form-floating">
      
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Internal Notes</label>
</div>
</div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <div class="container form-tab check">
           <ul>
             <p>Logistics</p>
             <li>
               <h5>Responsible</h5>
               <Avatar  src={logo2} alt="Logo2" />
              <select class="admin-select" aria-label="Default select example">
              <option selected disabled hidden>admin</option>
           <option value="1">karthick vj</option>
            <option value="2">michel rayapan</option>
           <option value="3">Saravanan</option>
 
           </select>
           </li>
             <li>
             <h5>Weight</h5>
            <input></input>
              </li>
             <li>
             <h5>Volume</h5>
             <input></input>
              </li>
             <li>
             <h5>Manuf. Lead Time</h5>
             <input></input>
             days
            </li>
            <li>
             <h5>Customer Lead Time</h5>
             <input></input>
             days
            </li>
            <li>
             <h5>HS Code</h5>
             <input></input>
            </li>
           </ul>
           <div className="text-ar">
      <h5>Internal Notes</h5>
      <div class="form-floating">
      
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Internal Notes</label>
</div>
</div>
            </div>
          </Item>
        </Grid>
        
      </Grid>
    
    </Box>

  </div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
    
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            <div class="container form-tab">
           <ul>
             <p>Receivables</p>
             <li>
               <h5>Income Account</h5>
               <select class="form-select tabform" aria-label="Default select example">
            <option selected>Consumable</option>
           <option value="1">Service</option>
            <option value="2">Shortable Product</option>
           <option value="3">Event Ticket</option>
          </select>
           </li>
           </ul>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
          <div class="container form-tab">
           <ul>
             <p>Payables</p>
             <li>
               <h5>Expense Account</h5>
                
              <select class="form-select tabform" aria-label="Default select example">
            <option selected>Consumable</option>
           <option value="1">Service</option>
            <option value="2">Shortable Product</option>
           <option value="3">Event Ticket</option>
 
           </select>
           </li>
             <li>
             <h5>Price Difference Account</h5>
             <select class="form-select tabform" aria-label="Default select example">
             <option selected>Ordered Quantaties</option>
             <option value="1">Delivered Quantaties</option>
  
 
            </select>
              </li>
            
           </ul>
            </div>
          </Item>
        </Grid>
         </Grid>
      <div className="text-ar">
      <h5>Internal Notes</h5>
      <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Internal Notes</label>
</div>
</div>
    </Box>
     </div>
  <div class="tab-pane" id="sales" role="tabpanel" aria-labelledby="sales-tab">

  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
           
            <div class="container form-tab">
           
           <ul>
           <p>Upsell & Cross-Sell</p>
             <li>
               <h5>Optional Products</h5>
             <Select
    
    isMulti
    name="options"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
           </li>
             <li>
            <h5>Accessory Products</h5>
            <Select
    
    isMulti
    name="options"
    options={options}
    className="basic-multi-select "
    classNamePrefix="select"
  />
              </li>
             <li>
             <h5>Alternative Products</h5>
             <Select
    
    isMulti
    name="options"
    options={options}
    className="basic-multi-select "
    classNamePrefix="select"
  />
            
              </li>
              <p>eCommerce Shop</p>
             <li>
             <h5>Website</h5>
             <select class="form-select tabform" aria-label="Default select example">
             <option selected disabled hidden>Choose an Opion</option>
             
             <option value="cm">cm</option>
             <option value="g">g</option>
             <option value="3">kg</option>
             <option value="4">oz</option>
             <option value="5">in</option>
             <option value="6">l</option>
             </select>
            </li>
            <li>
             <h5>Categories</h5>
             <Select
    
    isMulti
    name="options"
    options={options}
    className="basic-multi-select "
    classNamePrefix="select"
  />
            </li>
           </ul>
            </div>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
           
          <div class="container form-tab">
         
           <ul>
           <p>Point of Sale</p>
             <li>
               <h5>Available in POS</h5>
               <FormControlLabel control={<Checkbox defaultChecked  style ={{color: "#35979c", }} />} label="" />
              
           </li>
             <li>
             <h5>To Weigh With Scale</h5>
             <FormControlLabel control={<Checkbox defaultChecked  style ={{color: "#35979c", }} />} label="" />
              </li>
             <li>
             <h5>Category</h5>
             <select class="form-select tabform" aria-label="Default select example">
             <option selected disabled hidden>Choose an Option</option>
             <option  value="kilogram">kilogram</option>
             <option value="1">liter</option>
 
  
             </select>
             
              </li>
              <p>Extra Product Media</p>
             <li id="vidioplayer">
           
             <div>
             <ReactPlayer url={val} />
    </div>




    <React.Fragment>
      <Button  variant="outlined" onClick={handleClickOpen}>
        Add-Media
      </Button>
      <Dialog
       
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
        <div className="App">
      <form onSubmit={submitHandler}>
        <input ref={inputRef} />
        <button type="submit">Submit</button>
      </form>

     
    </div>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

            </li>
            
           </ul>
            </div>
          </Item>
        </Grid>
        
      </Grid>
      <div className="text-ar">
      <h5>Sales Description</h5>
      <div class="form-floating">
      
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Sales Description</label>
</div>
</div>
    </Box>

  </div>
  <div class="tab-pane" id="Rental" role="tabpanel" aria-labelledby="Rental-tab">
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Editablerentform />
      </Grid>
        <Grid item xs={8}>
        <div class="container form-tab">
           <ul>
             <p>Payables</p>
             <li>
               <h5>Expense Account</h5>
              <select class="form-select tabform" aria-label="Default select example">
            <option selected>Consumable</option>
           <option value="1">Service</option>
            <option value="2">Shortable Product</option>
           <option value="3">Event Ticket</option>
            </select>
           </li>
             <li>
             <h5>Price Difference Account</h5>
             <select class="form-select tabform" aria-label="Default select example">
             <option selected>Ordered Quantaties</option>
             <option value="1">Delivered Quantaties</option>
              </select>
              </li>
             </ul>
            </div>
        </Grid>
         </Grid>
     </Box>
    </div>
</div>
</div>
</div>
    </div>
  );
}

export default Addproduct;
