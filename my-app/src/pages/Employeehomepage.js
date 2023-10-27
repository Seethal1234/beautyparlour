import React, { useEffect } from 'react'
import Menu from '../components/Menu'
import './Employeehomepage.css'
import { useNavigate } from 'react-router-dom'

export default function Employeehomepage() {
  // const navigate = useNavigate()
  // const employeelogin = localStorage.getItem('loginID')
  // useEffect(()=>{
  //   if(employeelogin==null){
  //     navigate('/login')}
  // })
  return (
    <>
      <Menu />
      
      <section>
    <div class="bg-image">
      <img id="cimg" src="../images/beauty1.webp" width="100%" height="600px"/>
      <p id="txxt" class="mb-0">Always Make Room <br></br>for a Little Beauty in Your Life</p>
      <button class="btn1" role="button">ADD PRODUCT</button>
      <button class="btn2" role="button">VIEW APPOINMENTS</button>
</div>
</section>

<div class="row row-cols-3 g-3" id="cards">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">CONTACT</h5>
        <h6 class="xxx">T: 070 9485 7568<br></br>
          info@beautysalon.com<br></br>
          dhj@gmail.com
        </h6>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">HOURS</h5>
        <h6 class="xxx">Mon to Fri: 7:30 am — 1:00 am<br></br>
          Sat & : 9:00 am — 1:00 am<br></br>
         </h6>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">LOCATION</h5>
        <h6 class="xxx">85 Royal Mint Street,<br></br>
          London, E1 8LG<br></br>
          United Kingdom</h6>
      </div>
    </div>
  </div>
</div>

<div class="container py-5" >
  <div class="row py-5" >
    <div class="col-12 text-center" id="card">
      <div class="row">
      <div class="col-lg-4 col-md-6 vv profile-circel-image-200">
      <img src="../images/smartphone (1).png" class="img-fluid rounded-circle" height="50px" width="50px"/>
      <h5 class="mb-3 mt-5 head">Contact</h5>
      <p class="mb-4  head1">T: 070 9485 7568<br></br>
        info@beautysalon.com</p>
     
      </div>
      <div class="col-lg-4 col-md-6 vv profile-circel-image-200">
      <img src="../images/clock.png" class="rounded img-fluid rounded-circle"height="50px" width="50px"/>
      <h5 class="mb-3 mt-5 head">Hours</h5>
      <p class="mb-4  head1">Mon to Fri: 7:30 am — 1:00 am<br></br>
        Sat: 9:00 am — 1:00 am<br></br>
        Sun: 9:00 am — 11:30 pm</p>
  
      </div>
  <div class="col-lg-4 col-md-6 vv profile-circel-image-200">
      <img src="../images/location-pin.png" class="rounded img-fluid rounded-circle" height="50px" width="50px"/>
      <h5 class="mb-3 mt-5 head">Location</h5>
      <p class="mb-4 head1">85 Royal Mint Street,<br></br>
        London, E1 8LG, UK</p>

      </div>
      
      </div>
      
    </div>
  </div>
</div> 
    </>
  )
}
